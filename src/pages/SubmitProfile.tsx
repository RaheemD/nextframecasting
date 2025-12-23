import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitProfile = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const isDev = import.meta.env.DEV;
  const maxFiles = 3;
  const maxFileSizeBytes = 10 * 1024 * 1024;

  const setFileInputFiles = (files: File[]) => {
    const input = fileInputRef.current;
    if (!input) return;

    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    input.files = dataTransfer.files;
  };

  const normalizeFiles = (files: File[]) => {
    const imagesOnly = files.filter((f) => f.type.startsWith("image/"));
    const withinSize = imagesOnly.filter((f) => f.size <= maxFileSizeBytes);
    const rejectedCount = imagesOnly.length - withinSize.length;
    if (rejectedCount > 0) {
      toast({
        title: "Some photos were skipped",
        description: "Each photo must be 10MB or smaller.",
        variant: "destructive",
      });
    }
    return withinSize.slice(0, maxFiles);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setSelectedFiles((prev) => {
      const nextFiles = normalizeFiles([...prev, ...files]);
      setFileInputFiles(nextFiles);
      return nextFiles;
    });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    setSelectedFiles((prev) => {
      const nextFiles = normalizeFiles([...prev, ...files]);
      setFileInputFiles(nextFiles);
      return nextFiles;
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => {
      const nextFiles = prev.filter((_, i) => i !== index);
      setFileInputFiles(nextFiles);
      return nextFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setSelectedFiles([]);
        setFileInputFiles([]);
      } else if (isDev) {
        setIsSubmitted(true);
        form.reset();
        setSelectedFiles([]);
        setFileInputFiles([]);
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
        setSelectedFiles([]);
        setFileInputFiles([]);
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
              encType="multipart/form-data"
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

              {/* Media Upload */}
              <div className="space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-lg font-semibold text-foreground border-b border-border pb-3"
                >
                  Media
                </motion.h2>
                
                <div className="space-y-2 hidden">
                  <Label htmlFor="photos">Upload Photos (2-3 photos)</Label>
                  <motion.div 
                    whileHover={{ scale: 1.01, borderColor: 'hsl(var(--foreground))' }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-muted-foreground transition-all duration-300 cursor-pointer relative group"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2 group-hover:text-foreground transition-colors" />
                    </motion.div>
                    <p className="text-sm text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG up to 10MB each
                    </p>
                    <input
                      ref={fileInputRef}
                      id="photos"
                      name="photos"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </motion.div>
                  
                  {/* Selected Files Preview */}
                  {selectedFiles.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="hidden flex flex-wrap gap-3 mt-4"
                    >
                      {selectedFiles.map((file, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="relative group/file"
                        >
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary border border-border">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover/file:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="videoLink">Intro Video Link (optional)</Label>
                  <Input
                    id="videoLink"
                    name="videoLink"
                    type="url"
                    placeholder="YouTube, Vimeo, or Google Drive link"
                  />
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
