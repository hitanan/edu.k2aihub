'use client';

import React, { useState } from 'react';
import { ContactForm } from '@/types';

const FeedbackForm: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Tên là bắt buộc';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Vui lòng nhập địa chỉ email hợp lệ';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Tiêu đề là bắt buộc';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Nội dung là bắt buộc';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Nội dung phải có ít nhất 10 ký tự';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Create mailto link
    const subject = encodeURIComponent(`Góp Ý: ${form.subject}`);
    const body = encodeURIComponent(
      `Tên: ${form.name}\nEmail: ${form.email}\n\nNội dung:\n${form.message}\n\n---\nGửi từ Nền Tảng Thông Minh`
    );
    const mailtoLink = `mailto:jobtimeseo@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form after a delay
    setTimeout(() => {
      setForm({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Góp Ý</h2>
          <p className="text-gray-600">
            Chúng tôi rất mong nhận được ý kiến và đề xuất của bạn về ứng dụng Địa Lý Việt Nam. 
            Góp ý của bạn giúp chúng tôi cải thiện trải nghiệm cho mọi người.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Họ và Tên <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Họ và tên của bạn"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="email.cua.ban@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Tiêu Đề <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Mô tả ngắn gọn về góp ý của bạn"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Nội Dung <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical text-black ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Vui lòng chia sẻ góp ý chi tiết, đề xuất hoặc câu hỏi của bạn về ứng dụng Địa Lý Việt Nam..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Tối thiểu 10 ký tự ({form.message.length}/10)
            </p>
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1a8 8 0 018 8h1m-9 8v-1a8 8 0 01-8-8H3m9-8a8 8 0 00-8 8v1m8 7a8 8 0 008-8h1" />
                  </svg>
                  Đang chuẩn bị Email...
                </span>
              ) : (
                'Gửi Góp Ý qua Email'
              )}
            </button>
            <p className="mt-2 text-xs text-gray-500 text-center">
              Thao tác này sẽ mở ứng dụng email của bạn với nội dung góp ý sẵn sàng gửi tới chúng tôi
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
