"use client"

import type React from "react"

import { useState } from "react"
import {
  RegistrationSchema,
  type RegistrationFormData,
  NCDOptions,
  DoctorSpecialities,
  LocationOptions,
} from "@/lib/types/registration"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RegistrationForm() {
  const [formData, setFormData] = useState<Partial<RegistrationFormData>>({
    profession: undefined,
    subscribeToNewsletter: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribeToNewsletter: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setIsLoading(true)

    try {
      const validatedData = RegistrationSchema.parse(formData)
      console.log("[v0] Form submitted:", validatedData)

      // TODO: Send to API endpoint
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(validatedData),
      // });

      // Reset form on success
      setFormData({
        profession: undefined,
        subscribeToNewsletter: false,
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log("[v0] Validation error:", error.message)
      }
      // Handle zod validation errors
      if (error && typeof error === "object" && "errors" in error) {
        const validationErrors: Record<string, string> = {}
        ;(error as any).errors.forEach((err: any) => {
          validationErrors[err.path[0]] = err.message
        })
        setErrors(validationErrors)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const profession = formData.profession as string

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name || ""}
            onChange={handleInputChange}
            className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email || ""}
            onChange={handleInputChange}
            className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Contact Number */}
        <div className="space-y-2">
          <Label htmlFor="contactNo" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Contact Number *
          </Label>
          <Input
            id="contactNo"
            name="contactNo"
            type="tel"
            placeholder="Enter your contact number"
            value={formData.contactNo || ""}
            onChange={handleInputChange}
            className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500"
          />
          {errors.contactNo && <p className="text-sm text-red-500">{errors.contactNo}</p>}
        </div>

        {/* Profession */}
        <div className="space-y-2">
          <Label htmlFor="profession" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Profession *
          </Label>
          <Select value={profession} onValueChange={(value) => handleSelectChange("profession", value)}>
            <SelectTrigger className="bg-slate-900 border-slate-700 text-white">
              <SelectValue placeholder="Select profession" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="patient">Patient</SelectItem>
              <SelectItem value="organisation">Organisation</SelectItem>
            </SelectContent>
          </Select>
          {errors.profession && <p className="text-sm text-red-500">{errors.profession}</p>}
        </div>

        {/* Conditional: Speciality for Doctors */}
        {profession === "doctor" && (
          <div className="space-y-2">
            <Label htmlFor="speciality" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Speciality *
            </Label>
            <Select
              value={formData.speciality || ""}
              onValueChange={(value) => handleSelectChange("speciality", value)}
            >
              <SelectTrigger className="bg-slate-900 border-slate-700 text-white">
                <SelectValue placeholder="Select speciality" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                {DoctorSpecialities.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.speciality && <p className="text-sm text-red-500">{errors.speciality}</p>}
          </div>
        )}

        {/* Conditional: Prescription Issue for Patients */}
        {profession === "patient" && (
          <div className="space-y-2">
            <Label htmlFor="prescriptionIssue" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              What are you looking for? *
            </Label>
            <Select
              value={formData.prescriptionIssue || ""}
              onValueChange={(value) => handleSelectChange("prescriptionIssue", value)}
            >
              <SelectTrigger className="bg-slate-900 border-slate-700 text-white">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-slate-700">
                {NCDOptions.map((ncd) => (
                  <SelectItem key={ncd} value={ncd}>
                    {ncd}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.prescriptionIssue && <p className="text-sm text-red-500">{errors.prescriptionIssue}</p>}
          </div>
        )}

        {/* Conditional: Organisation Name for Organisations */}
        {profession === "organisation" && (
          <div className="space-y-2">
            <Label htmlFor="organisationName" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Organisation Name *
            </Label>
            <Input
              id="organisationName"
              name="organisationName"
              type="text"
              placeholder="Enter organisation name"
              value={formData.organisationName || ""}
              onChange={handleInputChange}
              className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500"
            />
            {errors.organisationName && <p className="text-sm text-red-500">{errors.organisationName}</p>}
          </div>
        )}

        {/* Age */}
        <div className="space-y-2">
          <Label htmlFor="age" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Age *
          </Label>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="Enter your age"
            value={formData.age || ""}
            onChange={handleInputChange}
            className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 focus:border-purple-500"
          />
          {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Gender *
          </Label>
          <Select value={formData.gender || ""} onValueChange={(value) => handleSelectChange("gender", value)}>
            <SelectTrigger className="bg-slate-900 border-slate-700 text-white">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Location *
          </Label>
          <Select value={formData.location || ""} onValueChange={(value) => handleSelectChange("location", value)}>
            <SelectTrigger className="bg-slate-900 border-slate-700 text-white">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent className="bg-slate-900 border-slate-700">
              {LocationOptions.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
        </div>

        {/* Subscribe to Newsletter - Full Width */}
        <div className="md:col-span-2 flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.subscribeToNewsletter || false}
            onCheckedChange={handleCheckboxChange}
            className="border-slate-600 bg-slate-900"
          />
          <Label htmlFor="newsletter" className="text-sm font-medium text-slate-400 cursor-pointer">
            Subscribe to Newsletter
          </Label>
        </div>

        {/* Submit Button - Full Width */}
        <div className="md:col-span-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition-all duration-200"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  )
}
