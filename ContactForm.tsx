'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Loader2, Send, AlertCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  quantity: z.string().min(1, 'Please specify required quantity'),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  productPreset?: string;
  variant?: 'default' | 'compact';
}

export default function ContactForm({
  productPreset = '',
  variant = 'default',
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { product: productPreset },
  });

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      reset();
    } catch {
      setError('Something went wrong. Please try WhatsApp or email us directly.');
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-DEFAULT" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
          Quote Request Received!
        </h3>
        <p className="font-body text-gray-600 max-w-sm mx-auto leading-relaxed">
          Our sales team will contact you within{' '}
          <strong>24 hours</strong> with bulk pricing tailored to your requirements.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-green-DEFAULT font-body font-medium hover:underline text-sm"
        >
          Submit another request →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            {...register('name')}
            placeholder="John Smith"
            className="form-input"
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
            Company / Organization *
          </label>
          <input
            {...register('company')}
            placeholder="Agro Trading Ltd"
            className="form-input"
            autoComplete="organization"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.company.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@company.com"
            className="form-input"
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
            Phone / WhatsApp *
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+1 555 000 0000"
            className="form-input"
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.phone.message}
            </p>
          )}
        </div>

        {/* Product */}
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
            Product Required *
          </label>
          <select {...register('product')} className="form-input cursor-pointer">
            <option value="">Select product...</option>
            <option value="NPK Fertilizer">NPK Fertilizer</option>
            <option value="Urea Fertilizer">Urea Fertilizer (46-0-0)</option>
            <option value="DAP Fertilizer">DAP Fertilizer (18-46-0)</option>
            <option value="MOP / Potash">MOP / Potash</option>
            <option value="SOP">SOP (Sulfate of Potash)</option>
            <option value="Other">Other / Custom Blend</option>
          </select>
          {errors.product && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.product.message}
            </p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
            Quantity Required (MT) *
          </label>
          <input
            {...register('quantity')}
            placeholder="e.g., 500 MT, 1 container"
            className="form-input"
          />
          {errors.quantity && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.quantity.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      {variant === 'default' && (
        <div>
          <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
            Additional Requirements
          </label>
          <textarea
            {...register('message')}
            rows={3}
            placeholder="Delivery port, packaging preferences, incoterms, etc."
            className="form-input resize-none"
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm font-body">
          <AlertCircle size={18} className="flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-DEFAULT text-white font-heading font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-all duration-200 uppercase tracking-wide text-lg shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send size={20} />
            Get Bulk Pricing Within 24 Hours
          </>
        )}
      </button>

      <p className="text-center font-body text-xs text-gray-400">
        🔒 Your information is secure. No spam, ever.
      </p>
    </form>
  );
}
