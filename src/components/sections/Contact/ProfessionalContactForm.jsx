import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';
import { BriefcaseIcon, Coffee, Handshake, Lightbulb, ChevronDown, Check } from 'lucide-react';

// Form configuration
const CONTACT_TYPES = [
  { id: 'job', label: 'Job Opportunity', icon: <BriefcaseIcon/>, color: 'from-green-500 to-emerald-500' },
  { id: 'project', label: 'Project Collab', icon: <Handshake/>, color: 'from-blue-500 to-cyan-500' },
  { id: 'consultation', label: 'Consultation', icon: <Lightbulb/>, color: 'from-purple-500 to-pink-500' },
  { id: 'other', label: 'Other', icon: <Coffee/>, color: 'from-orange-500 to-red-500' }
];

const URGENCY_LEVELS = [
  { 
    id: 'low', 
    label: 'Low Priority', 
    color: 'text-gray-300',
    description: 'No rush, whenever convenient',
  },
  { 
    id: 'medium', 
    label: 'Medium Priority', 
    color: 'text-yellow-300',
    description: 'Standard timeline expected',
  },
  { 
    id: 'high', 
    label: 'High Priority', 
    color: 'text-orange-300',
    description: 'Quick response preferred',
  },
  { 
    id: 'urgent', 
    label: 'Urgent', 
    color: 'text-red-300',
    description: 'Time-sensitive project',
  }
];

const BUDGET_OPTIONS = [
  { id: '', label: 'Select budget range', disabled: true },
  { id: 'under-5k', label: 'Under $5,000', icon: '💰' },
  { id: '5k-10k', label: '$5,000 - $10,000', icon: '💰💰' },
  { id: '10k-25k', label: '$10,000 - $25,000', icon: '💰💰💰' },
  { id: '25k-plus', label: '$25,000+', icon: '💎' },
  { id: 'discuss', label: "Let's discuss", icon: '🤝' }
];

const TIMELINE_OPTIONS = [
  { id: '', label: 'Select timeline', disabled: true },
  { id: 'asap', label: 'ASAP', color: 'text-red-300' },
  { id: '1-month', label: 'Within 1 month',  color: 'text-orange-300' },
  { id: '1-3-months', label: '1-3 months',  color: 'text-yellow-300' },
  { id: '3-6-months', label: '3-6 months',  color: 'text-green-300' },
  { id: 'flexible', label: 'Flexible',  color: 'text-blue-300' }
];

const FormField = ({ label, error, children, required = false, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-2"
  >
    <label className={`block text-sm font-medium ${
      theme.currentTheme === 'minimal' ? 'text-gray-700' : 'text-neutral-300'
    }`}>
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="text-red-400 text-xs"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const ContactTypeSelector = ({ selected, onSelect, theme }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {CONTACT_TYPES.map((type) => (
      <motion.button
        key={type.id}
        type="button"
        onClick={() => onSelect(type.id)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative p-4 rounded-lg text-center transition-all duration-200 border
          ${selected === type.id
            ? theme.currentTheme === 'minimal'
              ? 'bg-gray-100 border-gray-300 text-gray-800'
              : 'bg-neutral-700 border-purple-500 text-white'
            : theme.currentTheme === 'minimal'
              ? 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              : 'bg-neutral-800/50 border-neutral-700 text-neutral-400 hover:border-neutral-600'
          }
        `}
      >
        <div className="text-2xl mb-2 flex items-center justify-center">{type.icon}</div>
        <div className="text-xs font-medium">{type.label}</div>
        
        {selected === type.id && (
          <motion.div
            layoutId="contactTypeSelector"
            className={`absolute inset-0 rounded-lg bg-gradient-to-r ${type.color} opacity-10`}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.button>
    ))}
  </div>
);

// Custom Select Component
const CustomSelect = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option", 
  theme,
  showIcons = false,
  showDescriptions = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.id === value);

  const handleSelect = (optionValue) => {
    if (!options.find(opt => opt.id === optionValue)?.disabled) {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Select Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-200 flex items-center justify-between
          ${theme.currentTheme === 'minimal'
            ? 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
            : 'bg-neutral-800 border-neutral-600 text-white hover:border-neutral-500'
          }
          ${isOpen 
            ? theme.currentTheme === 'minimal' 
              ? 'border-gray-500 ring-1 ring-gray-500' 
              : 'border-purple-500 ring-1 ring-purple-500'
            : ''
          }
          focus:outline-none
        `}
      >
        <div className="flex items-center gap-3">
          {selectedOption && showIcons && selectedOption.icon && (
            <span className="text-lg">{selectedOption.icon}</span>
          )}
          {selectedOption && selectedOption.indicator && (
            <span className="text-sm">{selectedOption.indicator}</span>
          )}
          <span className={`
            ${selectedOption && !selectedOption.disabled 
              ? theme.currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
              : theme.currentTheme === 'minimal' ? 'text-gray-500' : 'text-neutral-400'
            }
          `}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute top-full left-0 right-0 mt-2 rounded-lg border shadow-lg z-50 overflow-hidden
              ${theme.currentTheme === 'minimal'
                ? 'bg-white border-gray-200'
                : 'bg-neutral-800 border-neutral-600'
              }
            `}
          >
            <div className="max-h-60 overflow-y-auto">
              {options.map((option, index) => (
                <motion.button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  disabled={option.disabled}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`
                    w-full px-4 py-3 text-left transition-colors duration-150 flex items-center justify-between group
                    ${option.disabled
                      ? theme.currentTheme === 'minimal' ? 'text-gray-400 cursor-not-allowed' : 'text-neutral-500 cursor-not-allowed'
                      : theme.currentTheme === 'minimal'
                        ? 'text-gray-900 hover:bg-gray-50'
                        : 'text-white hover:bg-neutral-700'
                    }
                    ${value === option.id
                      ? theme.currentTheme === 'minimal' ? 'bg-gray-100' : 'bg-neutral-700'
                      : ''
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {showIcons && option.icon && (
                      <span className="text-lg">{option.icon}</span>
                    )}
                    {option.indicator && (
                      <span className="text-sm">{option.indicator}</span>
                    )}
                    <div>
                      <div className={`font-medium ${option.color || ''}`}>
                        {option.label}
                      </div>
                      {showDescriptions && option.description && (
                        <div className={`text-xs mt-1 ${
                          theme.currentTheme === 'minimal' ? 'text-gray-500' : 'text-neutral-400'
                        }`}>
                          {option.description}
                        </div>
                      )}
                    </div>
                  </div>
                  {value === option.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`
                        ${theme.currentTheme === 'minimal' ? 'text-gray-600' : 'text-purple-400'}
                      `}
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

// Priority/Urgency Level Selector with Visual Indicators
const UrgencySelector = ({ selected, onSelect, theme }) => (
  <div className="grid grid-cols-2 gap-3">
    {URGENCY_LEVELS.map((level) => (
      <motion.button
        key={level.id}
        type="button"
        onClick={() => onSelect(level.id)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative p-4 rounded-lg text-left transition-all duration-200 border
          ${selected === level.id
            ? theme.currentTheme === 'minimal'
              ? 'bg-gray-50 border-gray-300 text-gray-800'
              : 'bg-neutral-700 border-purple-500 text-white'
            : theme.currentTheme === 'minimal'
              ? 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              : 'bg-neutral-800/50 border-neutral-700 text-neutral-400 hover:border-neutral-600'
          }
        `}
      >
        <div className="flex items-center gap-3 mb-2">
          {/* <span className="text-lg">{level.indicator}</span> */}
          <span className={`font-medium ${level.color}`}>{level.label}</span>
        </div>
        <div className={`text-xs ${
          theme.currentTheme === 'minimal' ? 'text-gray-500' : 'text-neutral-400'
        }`}>
          {level.description}
        </div>
        
        {selected === level.id && (
          <motion.div
            layoutId="urgencySelector"
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10"
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.button>
    ))}
  </div>
);

const SubmissionSuccess = ({ onReset, theme }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className={`text-center py-12 px-6 rounded-xl ${
      theme.currentTheme === 'minimal'
        ? 'bg-green-50 border border-green-200'
        : 'bg-green-900/20 border border-green-500/30'
    }`}
  >
    <div className="text-6xl mb-4">✅</div>
    <h3 className={`text-xl font-bold mb-2 ${
      theme.currentTheme === 'minimal' ? 'text-green-800' : 'text-green-400'
    }`}>
      Message Sent Successfully!
    </h3>
    <p className={`mb-6 ${
      theme.currentTheme === 'minimal' ? 'text-green-700' : 'text-green-300'
    }`}>
      Thank you for reaching out! I'll get back to you within 24 hours.
    </p>
    <motion.button
      onClick={onReset}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-2 rounded-lg font-medium transition-colors
        ${theme.currentTheme === 'minimal'
          ? 'bg-green-600 hover:bg-green-700 text-white'
          : 'bg-green-500 hover:bg-green-400 text-black'
        }
      `}
    >
      Send Another Message
    </motion.button>
  </motion.div>
);

export default function ProfessionalContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    contactType: '',
    urgency: 'medium',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const theme = useTheme();

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.contactType) newErrors.contactType = 'Please select a contact type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const errorElement = formRef.current?.querySelector(`[name="${firstError}"]`);
      errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In real implementation, you would send to your backend or email service
      // For now, we'll create a mailto link as fallback
      const mailtoBody = `
Contact Type: ${CONTACT_TYPES.find(t => t.id === formData.contactType)?.label}
Company: ${formData.company || 'Not specified'}
Urgency: ${URGENCY_LEVELS.find(u => u.id === formData.urgency)?.label}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}
      `.trim();
      
      const mailtoLink = `mailto:liuyuelin.dev@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(mailtoBody)}`;
      
      // Open mailto as fallback
      window.open(mailtoLink);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '', email: '', company: '', contactType: '', urgency: 'medium',
      subject: '', message: '', budget: '', timeline: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <SubmissionSuccess onReset={resetForm} theme={theme} />;
  }

  const inputClassName = `
    w-full px-4 py-3 rounded-lg border transition-colors duration-200
    ${theme.currentTheme === 'minimal'
      ? 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-gray-500'
      : 'bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
    }
    focus:outline-none
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        max-w-2xl mx-auto p-6 rounded-xl
        ${theme.currentTheme === 'minimal'
          ? 'bg-white border border-gray-200'
          : 'bg-neutral-900/50 border border-neutral-700'
        }
      `}
    >
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${
          theme.currentTheme === 'minimal' ? 'text-gray-900' : 'text-white'
        }`}>
          Let's Work Together
        </h3>
        <p className={`${
          theme.currentTheme === 'minimal' ? 'text-gray-600' : 'text-neutral-400'
        }`}>
          Tell me about your project and let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Type Selection */}
        <FormField label="What type of collaboration are you interested in?" required theme={theme} error={errors.contactType}>
          <ContactTypeSelector
            selected={formData.contactType}
            onSelect={(type) => setFormData(prev => ({ ...prev, contactType: type }))}
            theme={theme}
          />
        </FormField>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Your Name" required theme={theme} error={errors.name}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={inputClassName}
            />
          </FormField>

          <FormField label="Email Address" required theme={theme} error={errors.email}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@company.com"
              className={inputClassName}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Company/Organization" theme={theme}>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company"
              className={inputClassName}
            />
          </FormField>

          <FormField label="Priority Level" theme={theme}>
            <CustomSelect
              options={URGENCY_LEVELS}
              value={formData.urgency}
              onChange={(urgency) => setFormData(prev => ({ ...prev, urgency }))}
              placeholder="Select priority level"
              theme={theme}
              showDescriptions={true}
            />
          </FormField>
        </div>

        {/* Project Details */}
        <FormField label="Subject" required theme={theme} error={errors.subject}>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Brief description of your project"
            className={inputClassName}
          />
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Budget Range (Optional)" theme={theme}>
            <CustomSelect
              options={BUDGET_OPTIONS}
              value={formData.budget}
              onChange={(budget) => setFormData(prev => ({ ...prev, budget }))}
              placeholder="Select budget range"
              theme={theme}
              showIcons={true}
            />
          </FormField>

          <FormField label="Timeline (Optional)" theme={theme}>
            <CustomSelect
              options={TIMELINE_OPTIONS}
              value={formData.timeline}
              onChange={(timeline) => setFormData(prev => ({ ...prev, timeline }))}
              placeholder="Select timeline"
              theme={theme}
              showIcons={false}
            />
          </FormField>
        </div>

        <FormField label="Project Details" required theme={theme} error={errors.message}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Please describe your project, requirements, and any specific questions you have..."
            rows={6}
            className={inputClassName}
          />
          <div className={`text-xs mt-1 ${
            theme.currentTheme === 'minimal' ? 'text-gray-500' : 'text-neutral-500'
          }`}>
            {formData.message.length}/500 characters
          </div>
        </FormField>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`
            w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200
            ${isSubmitting
              ? theme.currentTheme === 'minimal'
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
              : theme.currentTheme === 'minimal'
                ? 'bg-gray-900 hover:bg-gray-800 text-white'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white'
            }
          `}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-t-transparent border-current rounded-full"
              />
              Sending Message...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Send Message</span>
              <span>→</span>
            </div>
          )}
        </motion.button>

        {errors.submit && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center text-sm"
          >
            {errors.submit}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}