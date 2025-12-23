import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitProfile = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const isDev = import.meta.env.DEV;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") params.append(key, value);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else if (isDev) {
        setIsSubmitted(true);
        form.reset();
      } else {
        toast({
          title: "Submission failed",
          description: "Please try again in a moment.",
          variant: "destructive",
        });
      }
    } catch (error) {
      if (isDev) {
        setIsSubmitted(true);
        form.reset();
        return;
      }
      toast({
        title: "Submission failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-[80vh] flex items-center bg-secondary">
        <div className="container-main py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Thank You for Submitting
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for submitting your profile. Our team will review the details 
              and contact you if suitable opportunities arise.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Join Our Database
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
              Submit Your Profile
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Submit your details to be considered for upcoming casting opportunities across films, ads, and digital content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <form
              name="actor-submissions"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <input type="hidden" name="form-name" value="actor-submissions" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="1"
                      max="100"
                      placeholder="Your age"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      name="gender"
                      type="text"
                      placeholder="Gender (optional)"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      name="height"
                      type="text"
                      placeholder="e.g., 5'8&quot; or 173 cm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Current city"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email address"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-foreground border-b border-border pb-3">
                  Professional Details
                </h2>
                
                <div className="space-y-2">
                  <Label htmlFor="languages">Languages Known</Label>
                  <Input
                    id="languages"
                    name="languages"
                    type="text"
                    placeholder="e.g., English, Hindi, Tamil"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Experience Level</Label>
                  <select
                    id="experienceLevel"
                    name="experienceLevel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select experience level</option>
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced</option>
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="message">Message / Notes</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Any additional information about your experience, skills, or availability..."
                />
              </div>

              <Button
                type="submit"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Profile"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SubmitProfile;
