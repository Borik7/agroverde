import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  MapPin,
  RotateCcw,
  TreePine,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Խելացի գյուղատնտեսություն՝{" "}
                  <span className="text-gradient">կայուն ապագայի համար</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Բացահայտեք ձեր շրջանին համապատասխան իդեալական բույսերը,
                  օպտիմալացրեք մշակաբույսերի հերթագայությունը և կայացրեք
                  տվյալահեն որոշումներ AgroVerde խելացի գյուղատնտեսական հարթակի
                  օգնությամբ։
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/plants">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gradient-green text-white hover:opacity-90"
                  >
                    Դիտել բույսերը
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/region-selector">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Գտնել ձեր շրջանը
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-emerald-200 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <Link
                    href="/plants"
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <TreePine className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-sm font-medium">Բույսեր</div>
                  </Link>
                  <Link
                    href="/region-selector"
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <MapPin className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-sm font-medium">Շրջաններ</div>
                  </Link>

                  <Link
                    href="/rotation"
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <RotateCcw className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-sm font-medium">Ռոտացիա</div>
                  </Link>

                  <Link
                    href="/"
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <Leaf className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-sm font-medium">Վերլուծություն</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ամեն ինչ խելացի գյուղատնտեսության համար
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Մեր ամբողջական հարթակը տրամադրում է գործիքներ և պատկերացումներ՝
              օգնելու ձեզ կայացնել հիմնավորված գյուղատնտեսական որոշումներ։
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <TreePine className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Բույսերի բազա</CardTitle>
                <CardDescription>
                  Բույսերի համապարփակ ցանկ՝ մանրամասն աճեցման պայմաններով և
                  հատկություններով։
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/plants">
                  <Button variant="outline" className="w-full">
                    Դիտել բույսերը
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Շրջանների վերլուծություն</CardTitle>
                <CardDescription>
                  Գտեք լավագույն բույսերը ձեր գտնվելու վայրի համար՝ հիմնվելով
                  կլիմայի և հողի տվյալների վրա։
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/region-selector">
                  <Button variant="outline" className="w-full">
                    Ընտրել շրջան
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <RotateCcw className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Մշակաբույսերի հերթագայություն</CardTitle>
                <CardDescription>
                  Արհեստական բանականության վրա հիմնված առաջարկներ՝ հողի
                  առողջության ու բերքատվության օպտիմալացման համար։
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/rotation">
                  <Button variant="outline" className="w-full">
                    Պլանավորել հերթագայություն
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <Zap className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Խելացի վերլուծություններ</CardTitle>
                <CardDescription>
                  Տվյալահեն առաջարկներ՝ ձեր գյուղատնտեսական որոշումները
                  օպտիմալացնելու և արտադրողականությունը բարձրացնելու համար։
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" disabled>
                  Շուտով հասանելի կլինի
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">250+</div>
              <div className="text-lg font-medium">Բույսերի տեսակներ</div>
              <div className="text-sm text-muted-foreground">
                Բույսերի ամբողջական տվյալների բազա
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">200+</div>
              <div className="text-lg font-medium">Ծածկված տարածաշրջաններ</div>
              <div className="text-sm text-muted-foreground">
                Մանրամասն կլիմայական և հողային տվյալներ
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">98%</div>
              <div className="text-lg font-medium">Ճշգրտություն</div>
              <div className="text-sm text-muted-foreground">
                AI-ի վրա հիմնված մշակաբույսերի առաջարկներ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Պատրա՞ստ եք փոխակերպել ձեր գյուղատնտեսությունը
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Միացեք հազարավոր ֆերմերներին, ովքեր արդեն օգտագործում են
                AgroVerde՝ ավելի խելացի գյուղատնտեսական որոշումներ կայացնելու
                համար։
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/plants">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gradient-green text-white hover:opacity-90"
                >
                  Սկսել հիմա
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/region-selector">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Գտնել ձեր շրջանը
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
