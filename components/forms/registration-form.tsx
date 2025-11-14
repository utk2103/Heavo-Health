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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function RegistrationForm() {
  const [formData, setFormData] = useState<Partial<RegistrationFormData>>({
    profession: undefined,
    subscribeToNewsletter: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribeToNewsletter: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setMessage(null)
    setIsLoading(true)

    try {
      // ✅ Validate using Zod
      console.log("Validation")
      const validatedData = RegistrationSchema.parse(formData)

      console.log(validatedData, "validatedData")

      // ✅ Send to backend API
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Submission failed")
      }

      setMessage("✅ Registration submitted successfully!")
      // Reset form after success
      setFormData({
        profession: undefined,
        subscribeToNewsletter: false,
      })
    } catch (error: any) {
      console.error("[RegistrationForm] Error:", error)

      if (error.errors) {
        // Handle zod validation errors
        const validationErrors: Record<string, string> = {}
        error.errors.forEach((err: any) => {
          validationErrors[err.path[0]] = err.message
        })
        setErrors(validationErrors)
      } else {
        setMessage(error.message || "Something went wrong. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const profession = formData.profession as string

  return (
    <div className="p-12">
    <div className="max-w-4xl mx-auto flex justify-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join  {" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Heavo Health
              </span>
        </h2>
      </div>
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name || ""}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email || ""}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Contact Number */}
        <div className="space-y-2">
          <Label htmlFor="contactNo">Contact Number *</Label>
          <Input
            id="contactNo"
            name="contactNo"
            type="tel"
            placeholder="Enter your contact number"
            value={formData.contactNo || ""}
            onChange={handleInputChange}
          />
          {errors.contactNo && <p className="text-sm text-red-500">{errors.contactNo}</p>}
        </div>

        {/* Profession */}
        <div className="space-y-2">
          <Label htmlFor="profession">Profession *</Label>
          <Select
            value={profession}
            onValueChange={(value) => handleSelectChange("profession", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="patient">Patient</SelectItem>
              <SelectItem value="organisation">Organisation</SelectItem>
            </SelectContent>
          </Select>
          {errors.profession && (
            <p className="text-sm text-red-500">{errors.profession}</p>
          )}
        </div>

        {/* Conditional Fields */}
        {profession === "doctor" && (
          <div className="space-y-2">
            <Label>Speciality *</Label>
            <Select
              value={formData.speciality || ""}
              onValueChange={(value) => handleSelectChange("speciality", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select speciality" />
              </SelectTrigger>
              <SelectContent>
                {DoctorSpecialities.map((spec) => (
                  <SelectItem key={spec} value={spec}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.speciality && (
              <p className="text-sm text-red-500">{errors.speciality}</p>
            )}
          </div>
        )}

        {profession === "patient" && (
          <div className="space-y-2">
            <Label>What are you looking for? *</Label>
            <Select
              value={formData.prescriptionIssue || ""}
              onValueChange={(value) =>
                handleSelectChange("prescriptionIssue", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {NCDOptions.map((ncd) => (
                  <SelectItem key={ncd} value={ncd}>
                    {ncd}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.prescriptionIssue && (
              <p className="text-sm text-red-500">
                {errors.prescriptionIssue}
              </p>
            )}
          </div>
        )}

        {profession === "organisation" && (
          <div className="space-y-2">
            <Label>Organisation Name *</Label>
            <Input
              name="organisationName"
              placeholder="Enter organisation name"
              value={formData.organisationName || ""}
              onChange={handleInputChange}
            />
            {errors.organisationName && (
              <p className="text-sm text-red-500">{errors.organisationName}</p>
            )}
          </div>
        )}

        {/* Age */}
        <div className="space-y-2">
          <Label>Age *</Label>
          <Input
            name="age"
            type="number"
            placeholder="Enter your age"
            value={formData.age || ""}
            onChange={handleInputChange}
          />
          {errors.age && <p className="text-sm text-red-500">{errors.age}</p>}
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label>Gender *</Label>
          <Select
            value={formData.gender || ""}
            onValueChange={(value) => handleSelectChange("gender", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label>Location *</Label>
          <Select
            value={formData.location || ""}
            onValueChange={(value) => handleSelectChange("location", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {LocationOptions.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.location && (
            <p className="text-sm text-red-500">{errors.location}</p>
          )}
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2 flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.subscribeToNewsletter || false}
            onCheckedChange={handleCheckboxChange}
          />
          <Label htmlFor="newsletter" className="cursor-pointer">
            Subscribe to Newsletter
          </Label>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {/* Success / Error Message */}
        {message && (
          <p
            className={`md:col-span-2 text-center font-medium ${
              message.startsWith("✅") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
    </div>
  )
}
