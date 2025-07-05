"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Можно добавить простую валидацию:
    if (!formData.name.trim() || !formData.message.trim()) {
      setError("Խնդրում ենք լրացնել պարտադիր դաշտերը՝ Անունը և Խնդիրը։");
      return;
    }

    setError(null);
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Անվավեր պատասխան՝ " + response.status);
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Փորձեք կրկին ուղարկել։");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Կապ մեզ հետ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Անուն, ազգանուն *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Անուն Ազգանուն"
          />
        </div>

        <div>
          <Label htmlFor="email">Էլ․ հասցե</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
          />
        </div>

        <div>
          <Label htmlFor="phone">Հեռախոս</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+374 00 000000"
          />
        </div>

        <div>
          <Label htmlFor="message">Հաղորդագրություն *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Գրեք ձեր հաղորդագրությունը այստեղ..."
            rows={4}
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm">
            Հաղորդագրությունը հաջողությամբ ուղարկվեց։
          </p>
        )}

        <Button type="submit" disabled={loading} size="default">
          {loading ? "Ուղարկվում է..." : "Ուղարկել"}
        </Button>
      </form>
    </div>
  );
}
