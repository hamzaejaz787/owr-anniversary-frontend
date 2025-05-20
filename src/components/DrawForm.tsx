import { z } from "zod";
import axios from "axios";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "./ui/card";
import { formSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowLeft } from "lucide-react";

type DrawFormProps = {
  onSuccess: () => void;
};

const DrawForm = ({ onSuccess }: DrawFormProps) => {
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [policyAccepted, setPolicyAccepted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      jobTitle: "",
      contact: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError(null);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/submit-form`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      onSuccess();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  const isButtonDisabled =
    !termsAccepted || !policyAccepted || form.formState.isSubmitting;

  return (
    <Card className="border-white/60 border-2 bg-white/20 backdrop-blur-xl p-8 md:p-12 max-w-4xl mx-auto w-full rounded-[4rem]">
      <CardHeader className="p-0 flex justify-end items-center">
        <a
          href="/"
          className="flex items-center gap-1 text-white hover:text-owr-blue hover:underline"
        >
          <ArrowLeft /> Go Back
        </a>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required
                        {...field}
                        placeholder="First name *"
                        className="text-white placeholder:text-white bg-white/5 backdrop-blur-md xl:text-lg py-6 border-gray-400 cursor-text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Last name *"
                        required
                        className="text-white placeholder:text-white bg-white/5 backdrop-blur-md xl:text-lg py-6 border-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required
                        {...field}
                        placeholder="Job title *"
                        className="text-white placeholder:text-white bg-white/5 backdrop-blur-md xl:text-lg py-6 border-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required
                        {...field}
                        placeholder="Company *"
                        className="text-white placeholder:text-white bg-white/5 backdrop-blur-md xl:text-lg py-6 border-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Contact Number *"
                        type="tel"
                        required
                        {...field}
                        className="text-white placeholder:text-white bg-white/5 backdrop-blur-md xl:text-lg py-6 border-gray-400"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfEvents"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="text-white data-[placeholder]:text-white bg-white/5 backdrop-blur-md w-full cursor-pointer py-6 border-gray-400 text-base xl:text-lg">
                          <SelectValue placeholder="Events per year" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-20">11-20</SelectItem>
                        <SelectItem value="21-50">21-50</SelectItem>
                        <SelectItem value="50+">50+</SelectItem>
                        <SelectItem value="100+">100+</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Business email *"
                      type="email"
                      required
                      {...field}
                      className="text-white placeholder:text-white bg-white/5 backdrop-blur-md xl:text-lg py-6 border-gray-400"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <em className="text-sm text-white/85 block">
                * indicates a required field
              </em>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                  className="bg-white data-[state=checked]:bg-owr-blue data-[state=checked]:border-none data-[state=checked]:outline-none size-6"
                />
                <Label htmlFor="terms" className="font-normal text-base block">
                  I agree to the prize draw{" "}
                  <a
                    href="https://oneworldrental.com/terms-and-conditions"
                    target="_blank"
                    className="underline hover:text-owr-blue transition-all ease-in"
                  >
                    terms and conditions.
                  </a>
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox
                  id="privacy-policy"
                  checked={policyAccepted}
                  onCheckedChange={(checked) => setPolicyAccepted(!!checked)}
                  className="bg-white data-[state=checked]:bg-owr-blue data-[state=checked]:border-none data-[state=checked]:outline-none size-6"
                />
                <Label
                  htmlFor="privacy-policy"
                  className="font-normal text-base block"
                >
                  I would like to receive the latest news and updates from One
                  World Rental. See our{" "}
                  <a
                    href="https://oneworldrental.com/privacy-policy"
                    target="_blank"
                    className="underline hover:text-owr-blue transition-all ease-in"
                  >
                    privacy policy
                  </a>{" "}
                  for more details.
                </Label>
              </div>
            </div>

            {error && <div className="text-red-500 mt-2">{error}</div>}

            <Button
              className="bg-owr-blue rounded-sm py-6 px-14 text-xl cursor-pointer hover:bg-white hover:text-owr-blue border-transparent font-medium"
              disabled={isButtonDisabled}
            >
              {form.formState.isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DrawForm;
