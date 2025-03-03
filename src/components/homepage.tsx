import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FileText,
  MessageSquare,
  BarChart,
  CheckCircle,
  ArrowRight,
  Brain,
  ChevronDown,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">InterviewAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Log in
            </Link>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Ace Your Next Interview with AI-Powered Practice
                </h1>
                <p className="text-muted-foreground md:text-xl mx-auto">
                  Upload your resume and get personalized interview questions
                  based on your skills and experience. Practice with our AI
                  interviewer and get real-time feedback.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Start Practicing Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>
              <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="AI Interview Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Prepare for Your Interview
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our AI-powered platform analyzes your resume and creates a
                  personalized interview experience to help you land your dream
                  job.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Resume Analysis</h3>
                <p className="text-center text-muted-foreground">
                  Upload your resume and our AI will analyze your skills,
                  experience, and job history to create tailored interview
                  questions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Interviewer</h3>
                <p className="text-center text-muted-foreground">
                  Practice with our realistic AI interviewer that asks relevant
                  questions based on your resume and desired role.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Performance Insights</h3>
                <p className="text-center text-muted-foreground">
                  Get detailed feedback on your answers, communication skills,
                  and areas for improvement after each practice session.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple Process, Powerful Results
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get started in minutes and begin improving your interview
                  skills today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Upload Your Resume</h3>
                <p className="text-center text-muted-foreground">
                  Simply upload your resume in PDF format to our secure
                  platform.
                </p>
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Upload Resume"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-0 top-6 hidden lg:block">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-center text-muted-foreground">
                  Our AI analyzes your skills and experience to create
                  personalized interview questions.
                </p>
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="AI Analysis"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-0 top-6 hidden lg:block">
                  <ArrowRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Practice & Improve</h3>
                <p className="text-center text-muted-foreground">
                  Start your mock interview session and receive instant feedback
                  to improve your skills.
                </p>
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Practice Interview"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    AI-Powered
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Tailored to Your Career Goals
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our advanced AI doesn't just ask generic questions. It
                    analyzes your resume to focus on your specific skills,
                    experience, and the job roles you're targeting.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>
                      Role-specific interview questions based on your resume
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Technical and behavioral question preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Adaptive difficulty based on your performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Industry-specific knowledge and expectations</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=300&width=550"
                    alt="AI Interview Demo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Success Stories from Our Users
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See how InterviewAI has helped job seekers land their dream
                  roles.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "After practicing with InterviewAI for just two weeks, I
                    felt so much more confident in my real interview. I got the
                    software engineering job I wanted!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-muted-foreground/20"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Alex Johnson</p>
                    <p className="text-xs text-muted-foreground">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "The personalized questions based on my resume were spot on.
                    Many of them came up in my actual interviews. This tool is a
                    game-changer!"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-muted-foreground/20"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Chen</p>
                    <p className="text-xs text-muted-foreground">
                      Product Manager
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    "As someone who gets nervous in interviews, this platform
                    was exactly what I needed. The feedback helped me improve my
                    communication skills tremendously."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted p-1">
                    <div className="h-8 w-8 rounded-full bg-muted-foreground/20"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael Rodriguez</p>
                    <p className="text-xs text-muted-foreground">
                      Marketing Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that works best for your interview preparation
                  needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">
                    Try out basic features
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $0
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>1 resume upload</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>3 practice interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Basic feedback</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">
                    For serious job seekers
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $19
                  <span className="ml-1 text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Unlimited resume uploads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Unlimited practice interviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Detailed performance analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Industry-specific questions</span>
                  </li>
                </ul>
                <Button className="mt-8" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">
                    For teams and organizations
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  Custom
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Custom interview scenarios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Team management dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Find answers to common questions about InterviewAI.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="rounded-lg border p-4">
                <button className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-medium">
                    How does the AI analyze my resume?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  Our AI uses natural language processing to analyze your
                  resume, identifying key skills, experiences, and job roles. It
                  then creates a personalized interview experience based on this
                  analysis, focusing on the areas most relevant to your career
                  goals.
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <button className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-medium">
                    Is my resume data secure?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  Yes, we take data security very seriously. Your resume and all
                  personal information are encrypted and stored securely. We do
                  not share your data with third parties, and you can request
                  deletion of your data at any time.
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <button className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-medium">
                    What types of interviews can I practice?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  You can practice a wide range of interview types, including
                  technical interviews for developers, behavioral interviews,
                  case interviews for consulting roles, and industry-specific
                  interviews for fields like healthcare, finance, marketing, and
                  more.
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <button className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-medium">
                    Can I practice for specific companies?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  Yes, our Pro and Enterprise plans allow you to select specific
                  companies or roles to target in your practice interviews. The
                  AI will tailor questions based on known interview patterns
                  from these companies.
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <button className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-medium">
                    How realistic are the AI interviews?
                  </h3>
                  <ChevronDown className="h-5 w-5" />
                </button>
                <div className="mt-2 text-muted-foreground">
                  Our AI interviews are designed to closely mimic real interview
                  experiences. The AI asks follow-up questions based on your
                  responses, challenges you when appropriate, and provides a
                  conversational experience similar to speaking with a human
                  interviewer.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Ace Your Next Interview?
                </h2>
                <p className="max-w-[900px] md:text-xl">
                  Join thousands of job seekers who have improved their
                  interview skills and landed their dream jobs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/demo">Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">InterviewAI</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} InterviewAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
