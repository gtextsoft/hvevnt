
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApplicationFormProps {
  onClose: () => void;
}

const ApplicationForm = ({ onClose }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    numEmployees: "",
    annualRevenue: "",
    businessLocation: "",
    whyAttend: "",
    whatLearn: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = Object.entries(formData);
    const emptyFields = requiredFields.filter(([_, value]) => !value.trim());
    
    if (emptyFields.length > 0) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required for your application.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log("Application submitted:", formData);
    
    toast({
      title: "Application Submitted Successfully!",
      description: "You'll receive a confirmation email shortly. Our team will review your application.",
    });
    
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl font-bold text-slate-900">
            The Gatekeeper Form
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-6 italic">
            We read every answer. Vague clichés go straight to the recycle bin.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-slate-900">
                Full Name *
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="Your full name"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-sm font-medium text-slate-900">
                Company Name *
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="Your company name"
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numEmployees" className="text-sm font-medium text-slate-900">
                  Number of Employees *
                </Label>
                <Input
                  id="numEmployees"
                  value={formData.numEmployees}
                  onChange={(e) => handleChange("numEmployees", e.target.value)}
                  placeholder="e.g., 25"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="annualRevenue" className="text-sm font-medium text-slate-900">
                  Annual Revenue (USD) *
                </Label>
                <Input
                  id="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={(e) => handleChange("annualRevenue", e.target.value)}
                  placeholder="e.g., $2.5M"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessLocation" className="text-sm font-medium text-slate-900">
                Business Location (City & Country) *
              </Label>
              <Input
                id="businessLocation"
                value={formData.businessLocation}
                onChange={(e) => handleChange("businessLocation", e.target.value)}
                placeholder="e.g., Lagos, Nigeria"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whyAttend" className="text-sm font-medium text-slate-900">
                Why do you want to attend? *
              </Label>
              <Textarea
                id="whyAttend"
                value={formData.whyAttend}
                onChange={(e) => handleChange("whyAttend", e.target.value)}
                placeholder="Hit us with specifics, not fluff."
                rows={4}
                className="w-full resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatLearn" className="text-sm font-medium text-slate-900">
                What do you hope to learn from Dr Stephen Akintayo? *
              </Label>
              <Textarea
                id="whatLearn"
                value={formData.whatLearn}
                onChange={(e) => handleChange("whatLearn", e.target.value)}
                placeholder="One sentence goals beat paragraphs of buzzwords."
                rows={3}
                className="w-full resize-none"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
