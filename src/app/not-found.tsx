"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import "./glitch.css";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 overflow-hidden">
      <ThemeToggle />
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Glitchy 404 Text */}
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-black glitch-text select-none text-transparent">404</h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow select-none text-foreground/90">
            404
          </h1>
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow-2 select-none text-primary/60">
            404
          </h1>
        </div>

        {/* Glitchy Message */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl glitch-message font-extralight text-muted-foreground">Page Not Found</p>
        </div>

        {/* Glitchy Button */}
        <div className="pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Glitch Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glitch-line glitch-line-1"></div>
          <div className="glitch-line glitch-line-2"></div>
        </div>
      </div>
    </div>
  );
}
