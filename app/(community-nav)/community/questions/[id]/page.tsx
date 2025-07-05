"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { ArrowUp, ArrowDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const questionData = {
  id: "1",
  title: "Ինչպես պլանավորել բանջարեղենի ռոտացիա գարնանը?",
  tags: ["Ռոտացիա", "Բանջարեղեն"],
  date: "5 Հուլիս, 2025",
  votes: 3,
  answers: [
    {
      id: "a1",
      text: "Սկսեք բույսերի խմբավորումով։ Հերթափոխեք բանջարեղենները ըստ խմբերի՝ խուսափելու համար հողի սպառումից։",
      votes: 5,
      comments: [
        { id: "c1", text: "Շատ օգտակար էր, շնորհակալություն։" },
        { id: "c2", text: "Իսկ կարելի՞ է սա կիրառել նաև կարտոֆիլի դեպքում։" },
      ],
    },
    {
      id: "a2",
      text: "Կարևոր է հաշվի առնել նաեւ եղանակային պայմանները և ջերմաստիճանը։",
      votes: 1,
      comments: [],
    },
  ],
};

export default function QuestionPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(questionData);

  const [commentStates, setCommentStates] = useState<Record<string, string>>(
    {}
  );
  const [formVisibility, setFormVisibility] = useState<Record<string, boolean>>(
    {}
  );

  const handleAddComment = (answerId: string, text: string) => {
    if (!text.trim()) return;
    setQuestion((prev) => ({
      ...prev,
      answers: prev.answers.map((a) =>
        a.id === answerId
          ? {
              ...a,
              comments: [
                ...(a.comments || []),
                { id: Date.now().toString(), text },
              ],
            }
          : a
      ),
    }));
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      {/* Question Title */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{question.title}</h1>
        <div className="flex flex-wrap gap-2">
          {question.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-gray-500">📅 {question.date}</div>
      </div>

      {/* Answers Section */}
      <div className="space-y-6">
        <TooltipProvider>
          <div className="flex items-center gap-2 mt-6">
            <h2 className="text-xl font-semibold">
              Պատասխաններ ({question.answers.length})
            </h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-flex items-center cursor-help text-muted-foreground">
                  <Info className="w-5 h-5" />
                  <span className="sr-only">Ինֆո</span>
                </span>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="max-w-sm text-sm leading-relaxed"
              >
                Քվեարկիր եթե հարցը կամ պատասխանը օգտակար է կամ ոչ․ ձայնդ կօգնի
                մյուսներին գտնել ճիշտ ինֆորմացիա։
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

        {question.answers.map((answer) => {
          const comment = commentStates[answer.id] || "";
          const showForm = formVisibility[answer.id] || false;

          return (
            <div
              key={answer.id}
              className="border rounded-lg p-4 space-y-4 bg-white"
            >
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Button variant="ghost" size="icon">
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <div className="text-sm">{answer.votes}</div>
                  <Button variant="ghost" size="icon">
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-base flex-1">{answer.text}</div>
              </div>

              {/* Comments */}
              <div className="pl-10 space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Մեկնաբանություններ
                </p>
                {answer.comments && answer.comments.length > 0 ? (
                  answer.comments.map((c) => (
                    <div
                      key={c.id}
                      className="text-sm bg-gray-100 p-2 rounded-md"
                    >
                      {c.text}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">
                    Դեռ մեկնաբանություն չկա։
                  </p>
                )}

                {showForm ? (
                  <div className="space-y-2 mt-2">
                    <textarea
                      className="w-full p-2 border rounded-md text-sm"
                      rows={2}
                      value={comment}
                      onChange={(e) =>
                        setCommentStates((prev) => ({
                          ...prev,
                          [answer.id]: e.target.value,
                        }))
                      }
                      placeholder="Գրիր քո մեկնաբանությունը..."
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          handleAddComment(answer.id, comment);
                          setCommentStates((prev) => ({
                            ...prev,
                            [answer.id]: "",
                          }));
                          setFormVisibility((prev) => ({
                            ...prev,
                            [answer.id]: false,
                          }));
                        }}
                      >
                        Ուղարկել
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setFormVisibility((prev) => ({
                            ...prev,
                            [answer.id]: false,
                          }))
                        }
                      >
                        Չեղարկել
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="link"
                    size="sm"
                    className="pl-0 text-primary"
                    onClick={() =>
                      setFormVisibility((prev) => ({
                        ...prev,
                        [answer.id]: true,
                      }))
                    }
                  >
                    💬 Մեկնաբանել
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Answer Button */}
      <div className="text-center mt-8">
        <Button>Տալ պատասխան</Button>
        <p className="text-sm text-muted-foreground mt-2">
          Պատասխան տալու համար անհրաժեշտ է մուտք գործել։
        </p>
      </div>
    </div>
  );
}
