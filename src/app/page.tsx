// app/(components)/Hero.tsx  (example)
"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import {
  Apple,
  Smartphone,
  Download,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
  Leaf,
  Cloud,
  Stethoscope,
  Bell,
  BarChart3,
  Share2,
  CalendarDays,
  CheckCircle2,
  Star,
} from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Logo from "../app/logo.png";
import Image from "next/image";

// --- Helpers ---
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

const Section: React.FC<
  React.PropsWithChildren<{ id?: string; className?: string }>
> = ({ id, className, children }) => (
  <section
    id={id}
    className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${
      className || ""
    }`}
  >
    {children}
  </section>
);

// --- Phone Mock ---
const PhoneMock: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={`relative mx-auto aspect-[9/19] w-full max-w-[340px] rounded-[2.25rem] border border-slate-200 bg-white p-3 shadow-xl ${
      className || ""
    }`}
  >
    <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-b from-blue-50/60 via-white to-emerald-50/60" />
    <div className="relative z-10 h-full w-full rounded-2xl border bg-white/60 backdrop-blur">
      {/* Notch */}
      <div className="mx-auto mt-1 h-6 w-32 rounded-full bg-slate-200" />
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={Logo} width={100} height={100} alt="Logo" />
            <div className="text-sm font-semibold">SnugBites</div>
          </div>
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            Beta
          </Badge>
        </div>
      </div>
      {/* Stats Card */}
      <div className="px-4 pt-4">
        <Card className="border-slate-200 bg-white/80">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Today’s Overview</CardTitle>
            <CardDescription className="text-xs">
              Wed, 7:30 AM – 6:30 PM
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border bg-blue-50 p-3 text-center">
              <div className="text-xs text-slate-600">Meals</div>
              <div className="text-xl font-bold">5</div>
            </div>
            <div className="rounded-xl border bg-emerald-50 p-3 text-center">
              <div className="text-xs text-slate-600">New foods</div>
              <div className="text-xl font-bold">1</div>
            </div>
            <div className="rounded-xl border bg-amber-50 p-3 text-center">
              <div className="text-xs text-slate-600">Allergens</div>
              <div className="text-xl font-bold">0</div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Meal Card */}
      <div className="px-4 pt-4">
        <Card className="border-slate-200 bg-white/80">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <UtensilsCrossed className="h-4 w-4" />
              Breakfast – Oat + Banana
            </CardTitle>
            <CardDescription className="text-xs">
              07:45 AM • 120 ml
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-500">
              <Star className="h-4 w-4 fill-amber-400" />
              <Star className="h-4 w-4 fill-amber-400" />
              <Star className="h-4 w-4 fill-amber-400" />
              <Star className="h-4 w-4" />
              <Star className="h-4 w-4" />
            </div>
            <Button size="sm" variant="outline" className="rounded-full">
              Repeat
            </Button>
          </CardContent>
        </Card>
      </div>
      {/* Footer Pills */}
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
        <div className="rounded-full bg-slate-200 px-6 py-2 text-xs font-medium text-slate-700 shadow">
          Log
        </div>
        <div className="rounded-full bg-blue-600 px-6 py-2 text-xs font-medium text-white shadow">
          + Add
        </div>
        <div className="rounded-full bg-slate-200 px-6 py-2 text-xs font-medium text-slate-700 shadow">
          More
        </div>
      </div>
    </div>
  </div>
);

// --- Main Page ---
export default function PromoHomePage() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white via-blue-50/40 to-emerald-50/40 text-slate-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur">
        <Section className="flex h-16 items-center justify-between">
          <a href="#" className="group inline-flex items-center gap-2">
            <Image src={Logo} width={60} height={60} alt="Logo" />
            <span className="text-lg font-bold tracking-tight">SnugBites</span>
            <Badge className="ml-1 bg-emerald-100 text-emerald-700 group-hover:bg-emerald-100">
              Beta
            </Badge>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#recipes"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Recipes
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign in
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
              <Download className="mr-2 h-4 w-4" /> Get the app
            </Button>
          </div>
        </Section>
      </nav>

      {/* Hero */}
      <Section className="relative grid grid-cols-1 items-center gap-12 py-14 md:grid-cols-2 md:py-24">
        <motion.div {...fadeUp}>
          <Badge className="mb-5 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Made for new parents
          </Badge>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Make baby meals{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              stress‑free
            </span>
            .
          </h1>
          <p className="mt-4 max-w-prose text-pretty text-slate-700">
            SnugBites helps you log feedings, introduce new foods safely, track
            allergens & stools, and share updates with anyone who cares for your
            baby.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-blue-600 text-white hover:bg-blue-600/90"
            >
              <Apple className="mr-2 h-5 w-5" /> App Store (soon)
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-xl">
              <Smartphone className="mr-2 h-5 w-5" /> Try Web Demo
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" /> Private by design
            </div>
            <div className="flex items-center gap-1">
              <Share2 className="h-4 w-4" /> Share with caregivers
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" /> Doctor‑friendly reports
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="md:justify-self-end">
          <PhoneMock />
        </motion.div>
      </Section>

      {/* Trust Bar */}
      <Section className="pb-12">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-white/60 p-6 backdrop-blur sm:grid-cols-3 md:grid-cols-6">
          {[
            "No ads",
            "iCloud/Drive export",
            "Offline first",
            "Multi‑caregiver",
            "Allergen tracker",
            "Free during beta",
          ].map((t) => (
            <div
              key={t}
              className="text-center text-xs font-medium text-slate-600"
            >
              {t}
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="py-12 md:py-20">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All the little things—beautifully organized
          </h2>
          <p className="mt-3 text-slate-700">
            Fast logging, smart suggestions, and clear insights designed for
            real‑life parenting.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-blue-100 bg-blue-50/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <UtensilsCrossed className="h-5 w-5" />
                One‑tap meal logging
              </CardTitle>
              <CardDescription>
                Save time with presets and recent meals.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Create favorites, set portion sizes, and rate how much baby liked
              it.
            </CardContent>
          </Card>

          <Card className="border-emerald-100 bg-emerald-50/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Leaf className="h-5 w-5" />
                Allergen & new food tracking
              </CardTitle>
              <CardDescription>
                Introduce foods safely with reminders.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Track exposures for peanuts, eggs, dairy, and more. Get gentle
              nudges to re‑try on schedule.
            </CardContent>
          </Card>

          <Card className="border-amber-100 bg-amber-50/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bell className="h-5 w-5" />
                Smart reminders
              </CardTitle>
              <CardDescription>Stay on top of feeds and naps.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Gentle notifications for feed windows, water sips, and vitamin D.
            </CardContent>
          </Card>

          <Card className="border-purple-100 bg-purple-50/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5" />
                Clear insights
              </CardTitle>
              <CardDescription>See patterns at a glance.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Weekly trends for appetite, stools, and sleep—exportable for
              pediatric visits.
            </CardContent>
          </Card>

          <Card className="border-pink-100 bg-pink-50/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Stethoscope className="h-5 w-5" />
                Doctor‑friendly reports
              </CardTitle>
              <CardDescription>Bring useful data, not noise.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Print or share concise PDF summaries with your pediatrician.
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Cloud className="h-5 w-5" />
                Sync & share
              </CardTitle>
              <CardDescription>
                Everyone stays on the same page.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700">
              Invite partners or caregivers with role‑based access.
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Recipe Spotlight */}
      <Section id="recipes" className="py-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <Badge className="mb-3 bg-amber-100 text-amber-700 hover:bg-amber-100">
              Baby‑friendly recipes
            </Badge>
            <h3 className="text-2xl font-bold tracking-tight">
              Tasty ideas made simple
            </h3>
            <p className="mt-2 text-slate-700">
              Discover age‑appropriate recipes and texture guidance. Save
              favorites and add them to your meal plan in a tap.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Iron‑rich
                first foods
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Texture by
                stage (6–12 mo)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Allergens
                done right
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button className="bg-amber-500 text-white hover:bg-amber-500/90">
                Browse recipes
              </Button>
              <Button variant="outline">Add my own</Button>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sparkles className="h-5 w-5" /> Banana Oat Pancakes
                </CardTitle>
                <CardDescription>
                  Soft, mashable, and naturally sweet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg border bg-white/70 p-3 text-center">
                    <div className="text-xs text-slate-600">Prep</div>
                    <div className="font-semibold">5 min</div>
                  </div>
                  <div className="rounded-lg border bg-white/70 p-3 text-center">
                    <div className="text-xs text-slate-600">Cook</div>
                    <div className="font-semibold">6 min</div>
                  </div>
                  <div className="rounded-lg border bg-white/70 p-3 text-center">
                    <div className="text-xs text-slate-600">Texture</div>
                    <div className="font-semibold">Mashable</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4" />
                </div>
                <Button size="sm" variant="outline">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-12 md:py-20">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, parent‑friendly pricing
          </h2>
          <p className="mt-2 text-slate-700">
            Free while in beta. Keep your data private and portable.
          </p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-slate-200 bg-white/70">
            <CardHeader>
              <CardTitle className="text-xl">Free (Beta)</CardTitle>
              <CardDescription>Everything you need to start</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                  Unlimited meal logs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> New food
                  & allergen tracking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Basic
                  insights & exports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> 1
                  caregiver share
                </li>
              </ul>
            </CardContent>
            <CardFooter className="justify-between">
              <div className="text-2xl font-bold">$0</div>
              <Button className="bg-blue-600 text-white hover:bg-blue-600/90">
                Start free
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-emerald-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 text-white hover:bg-blue-600">
                  Coming soon
                </Badge>
                <CardTitle className="text-xl">Pro</CardTitle>
              </div>
              <CardDescription>
                Advanced tools for busy families
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                  Multi‑caregiver & roles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Custom
                  reminders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />{" "}
                  Pediatric PDF reports
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Priority
                  support
                </li>
              </ul>
            </CardContent>
            <CardFooter className="justify-between">
              <div className="text-2xl font-bold">$4.99/mo</div>
              <Button variant="outline">Join waitlist</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="text-2xl font-bold tracking-tight">
            Frequently asked questions
          </h3>
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my data private?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Your logs live on your device first. You can export
                or delete them anytime. Optional cloud sync is end‑to‑end
                encrypted.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can multiple caregivers use it?
              </AccordionTrigger>
              <AccordionContent>
                Yes—invite partners, grandparents or sitters. You control what
                each person can see or edit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does it work offline?</AccordionTrigger>
              <AccordionContent>
                It’s designed to be fast with or without internet. Sync will
                catch up when you’re back online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Will there be Android and iOS apps?
              </AccordionTrigger>
              <AccordionContent>
                Yes. A web demo is available during beta; native apps are coming
                soon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-blue-600 to-emerald-600 p-8 text-white shadow">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold">
              Ready to make mealtimes simpler?
            </h3>
            <p className="mt-1 text-blue-50">
              Join the beta and be the first to try new features.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-white text-blue-700 hover:bg-white/90"
              >
                <Download className="mr-2 h-5 w-5" /> Get started free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/60 text-white hover:bg-white/10"
              >
                Join newsletter
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white/70">
        <Section className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src={Logo} width={500} height={500} alt="Logo" />
            <span className="font-semibold text-slate-800">SnugBites</span>
            <span className="mx-2">•</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-900">
              Privacy
            </a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
