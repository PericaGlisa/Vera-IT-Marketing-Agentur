'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, CheckCircle, FileText } from 'lucide-react';

interface FormData {
  // Schritt 1: Grunddaten
  name: string;
  email: string;
  phone: string;
  companyName: string;
  companyStage: string;
  website: string;
  linkedin: string;
  industry: string;
  
  // Schritt 2: Team und Phase
  teamSize: string;
  revenue: string;
  hasProduct: string;
  productDescription: string;
  
  // Schritt 3: Ziele und Bedürfnisse
  mainReasons: string[];
  otherReason: string;
  painPoint: string;
  futureGoals: string;
  priority: string;
  
  // Schritt 4: Technische Details
  hasTechTeam: string;
  preferredTech: string;
  hasIdeas: string;
  timeframe: string;
  
  // Schritt 5: Budget
  budget: string;
  hasWorkedWithIT: string;
  
  // Schritt 6: Zusätzliche Kommentare
  additionalComments: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  companyName: '',
  companyStage: '',
  website: '',
  linkedin: '',
  industry: '',
  teamSize: '',
  revenue: '',
  hasProduct: '',
  productDescription: '',
  mainReasons: [],
  otherReason: '',
  painPoint: '',
  futureGoals: '',
  priority: '',
  hasTechTeam: '',
  preferredTech: '',
  hasIdeas: '',
  timeframe: '',
  budget: '',
  hasWorkedWithIT: '',
  additionalComments: ''
};

export default function NeueKundenForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const totalSteps = 6;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMainReasonsChange = (reason: string, checked: boolean) => {
    if (checked) {
      updateFormData('mainReasons', [...formData.mainReasons, reason]);
    } else {
      updateFormData('mainReasons', formData.mainReasons.filter(r => r !== reason));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/customer-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      
      // Redirect to thank you page
      window.location.href = '/danke';
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.companyName && formData.companyStage && formData.industry;
      case 2:
        return formData.teamSize && formData.revenue && formData.hasProduct;
      case 3:
        return formData.mainReasons.length > 0 && formData.painPoint && formData.futureGoals && formData.priority;
      case 4:
        return formData.hasTechTeam && formData.hasIdeas && formData.timeframe;
      case 5:
        return formData.budget && formData.hasWorkedWithIT;
      case 6:
        return true;
      default:
        return false;
    }
  };

  // Remove the inline success state since we redirect to /danke page

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-4 sm:mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
              VERA IT – <span className="gradient-text">Formular für neue Kunden</span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 text-center mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Bitte nehmen Sie sich 5–10 Minuten Zeit, um dieses Formular auszufüllen. 
            Basierend auf Ihren Antworten wird sich unser Team auf das erste Gespräch vorbereiten 
            und bewerten, wie wir Ihnen am besten helfen können.
          </p>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm sm:text-base text-gray-400 font-medium">Schritt {currentStep} von {totalSteps}</span>
              <span className="text-sm sm:text-base text-gray-400 font-medium">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-3 bg-zinc-800 [&>div]:primary-gradient" />
          </div>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl sm:text-2xl font-heading font-semibold text-white">Grunddaten über das Unternehmen und die Kontaktperson</CardTitle>
                </CardHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Name und Nachname *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">E-Mail-Adresse *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="ihre.email@beispiel.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Telefonnummer (optional)</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+49 123 456789"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Firmenname *</label>
                    <Input
                      value={formData.companyName}
                      onChange={(e) => updateFormData('companyName', e.target.value)}
                      placeholder="Name Ihres Unternehmens"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Befindet sich das Unternehmen in der Gründungsphase? *</label>
                  <div className="space-y-2">
                    {['Ja', 'Nein', 'Etwas dazwischen (z.B. wir arbeiten bereits, aber die Firma ist noch nicht offiziell registriert)'].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="companyStage"
                          value={option}
                          checked={formData.companyStage === option}
                          onChange={(e) => updateFormData('companyStage', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm sm:text-base text-gray-400">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Website des Unternehmens (falls vorhanden)</label>
                  <Input
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    placeholder="www.ihrefirma.com (Falls Sie keine Website haben – schreiben Sie 'noch keine')"
                  />
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">LinkedIn-Profil des Unternehmens (optional)</label>
                  <Input
                    value={formData.linkedin}
                    onChange={(e) => updateFormData('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/company/ihrefirma"
                  />
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Was ist Ihre Tätigkeit / Branche? *</label>
                  <Input
                    value={formData.industry}
                    onChange={(e) => updateFormData('industry', e.target.value)}
                    placeholder="Kurze Beschreibung in einem Satz (Beispiel: Herstellung von Naturkosmetik, Online-Bildung, SaaS für Logistik usw.)"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl sm:text-2xl font-heading font-semibold text-white">Informationen über das Team und die aktuelle Phase</CardTitle>
                </CardHeader>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Wie viele Teammitglieder haben Sie derzeit (Angestellte oder Mitarbeiter)? *</label>
                  <div className="space-y-2">
                    {['1', '2–5', '6–10', '11–20', '21+'].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="teamSize"
                          value={option}
                          checked={formData.teamSize === option}
                          onChange={(e) => updateFormData('teamSize', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Wie hoch war Ihr Jahresumsatz im vergangenen Jahr? *</label>
                  <p className="text-sm text-gray-400 mb-3">Falls die Firma neu ist, können Sie "Firma ist in Gründung" markieren.</p>
                  <div className="space-y-2">
                    {[
                      'Firma ist in Gründung / hat noch keine Einnahmen',
                      'Weniger als 10.000 EUR',
                      '10.000 – 30.000 EUR',
                      '30.000 – 100.000 EUR',
                      '100.000 – 250.000 EUR',
                      '250.000 – 500.000 EUR',
                      'Mehr als 500.000 EUR'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                        name="revenue"
                        value={option}
                        checked={formData.revenue === option}
                        onChange={(e) => updateFormData('revenue', e.target.value)}
                        className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Haben Sie ein konkretes Produkt, eine Anwendung oder Website, die bereits funktioniert? *</label>
                  <div className="space-y-2">
                    {['Ja', 'Nein', 'In Entwicklung'].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                        name="hasProduct"
                        value={option}
                        checked={formData.hasProduct === option}
                        onChange={(e) => updateFormData('hasProduct', e.target.value)}
                        className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                  
                  {formData.hasProduct === 'Ja' && (
                    <div className="mt-4">
                      <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Falls die Antwort "ja" ist – geben Sie den Link oder eine kurze Beschreibung ein:</label>
                      <Input
                        value={formData.productDescription}
                        onChange={(e) => updateFormData('productDescription', e.target.value)}
                        placeholder="Link oder Beschreibung Ihres Produkts"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl sm:text-2xl font-heading font-semibold text-white">Ziele und Bedürfnisse</CardTitle>
                </CardHeader>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Was ist der Hauptgrund, warum Sie sich an VERA IT gewandt haben? *</label>
                  <p className="text-sm text-gray-400 mb-3">(Sie können mehrere Optionen markieren)</p>
                  <div className="space-y-2">
                    {[
                      'Entwicklung von Softwarelösungen (Web, mobile Anwendung usw.)',
                      'Digitale Transformation des Geschäfts',
                      'Beratung zur digitalen Strategie',
                      'Automatisierung von Prozessen',
                      'Umsatzsteigerung durch digitale Kanäle',
                      'Branding und Interface Design',
                      'Erstellung oder Verbesserung der Website',
                      'Cloud-Migration / DevOps / Technischer Support'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={formData.mainReasons.includes(option)}
                          onChange={(e) => handleMainReasonsChange(option, e.target.checked)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.mainReasons.includes('Anderes')}
                        onChange={(e) => handleMainReasonsChange('Anderes', e.target.checked)}
                        className="text-purple-600"
                      />
                      <span className="text-sm text-gray-300">Anderes:</span>
                    </label>
                    {formData.mainReasons.includes('Anderes') && (
                      <Input
                        value={formData.otherReason}
                        onChange={(e) => updateFormData('otherReason', e.target.value)}
                        placeholder="Bitte spezifizieren Sie"
                        className="ml-6 mt-2"
                      />
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Was ist derzeit Ihre größte Herausforderung (sog. "Pain Point")? *</label>
                  <Textarea
                    value={formData.painPoint}
                    onChange={(e) => updateFormData('painPoint', e.target.value)}
                    placeholder="Kurze Textantwort (bis zu 500 Zeichen)"
                    maxLength={500}
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Wo möchten Sie in 12 Monaten sein (in digitaler Hinsicht)? *</label>
                  <Textarea
                    value={formData.futureGoals}
                    onChange={(e) => updateFormData('futureGoals', e.target.value)}
                    placeholder="Kurze Textantwort (bis zu 500 Zeichen)"
                    maxLength={500}
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Was ist Ihnen im Moment wichtiger? *</label>
                  <div className="space-y-2">
                    {[
                      'Umsatzsteigerung',
                      'Kostensenkung',
                      'Geschäftsoptimierung',
                      'Schnellerer Markteintritt',
                      'Branding und Positionierung'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="priority"
                          value={option}
                          checked={formData.priority === option}
                          onChange={(e) => updateFormData('priority', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl sm:text-2xl font-heading font-semibold text-white">Technische Details und Erwartungen</CardTitle>
                </CardHeader>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Haben Sie bereits ein technisches Team oder Partner (z.B. Programmierer, Designer)? *</label>
                  <div className="space-y-2">
                    {[
                      'Ja',
                      'Nein',
                      'Teilweise (z.B. wir haben gelegentlich Freelancer)'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="hasTechTeam"
                          value={option}
                          checked={formData.hasTechTeam === option}
                          onChange={(e) => updateFormData('hasTechTeam', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Bevorzugen Sie bestimmte Technologien?</label>
                  <Input
                    value={formData.preferredTech}
                    onChange={(e) => updateFormData('preferredTech', e.target.value)}
                    placeholder="(Beispiel: React, Next.js, WordPress, Laravel, Python… oder 'wir sind uns nicht sicher')"
                  />
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Haben Sie bereits Ideen/Skizzen/Beispiele für Lösungen, die Sie entwickeln möchten? *</label>
                  <div className="space-y-2">
                    {[
                      'Ja (möglich, Link hinzuzufügen oder Datei hochzuladen)',
                      'Noch nicht, wir erwarten Hilfe von Ihnen',
                      'Teilweise – wir haben eine Vision'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="hasIdeas"
                          value={option}
                          checked={formData.hasIdeas === option}
                          onChange={(e) => updateFormData('hasIdeas', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Was ist der ungefähre Zeitrahmen für den Projektstart? *</label>
                  <div className="space-y-2">
                    {[
                      'Sofort',
                      'In den nächsten 4 Wochen',
                      'In den nächsten 2–3 Monaten',
                      'Später als 3 Monate',
                      'Wir wissen es noch nicht'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="timeframe"
                          value={option}
                          checked={formData.timeframe === option}
                          onChange={(e) => updateFormData('timeframe', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl sm:text-2xl font-heading font-semibold text-white">Budget und Offenheit für Zusammenarbeit</CardTitle>
                </CardHeader>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Haben Sie ein ungefähres Budget für das Projekt? *</label>
                  <p className="text-sm text-gray-400 mb-3">Diese Information ist vertraulich und dient nur unserer internen Bewertung und Lösungsempfehlung.</p>
                  <div className="space-y-2">
                    {[
                      'Bis zu 3.000 EUR',
                      '3.000 – 7.000 EUR',
                      '7.000 – 15.000 EUR',
                      '15.000 – 30.000 EUR',
                      '30.000 – 50.000 EUR',
                      '50.000+ EUR',
                      'Wir haben noch kein klares Budget',
                      'Wir erwarten einen Vorschlag von Ihrer Seite'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="budget"
                          value={option}
                          checked={formData.budget === option}
                          onChange={(e) => updateFormData('budget', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm sm:text-base text-gray-400">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Haben Sie bereits mit IT-Firmen oder Agenturen gearbeitet? *</label>
                  <div className="space-y-2">
                    {[
                      'Ja',
                      'Nein',
                      'Teilweise (z.B. Einzelpersonen, Freelancer)'
                    ].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="hasWorkedWithIT"
                          value={option}
                          checked={formData.hasWorkedWithIT === option}
                          onChange={(e) => updateFormData('hasWorkedWithIT', e.target.value)}
                          className="text-purple-600"
                        />
                        <span className="text-sm text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl sm:text-2xl font-heading font-semibold text-white">Zusätzliche Fragen / Kommentare</CardTitle>
                </CardHeader>
                
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2 text-gray-400">Haben Sie noch etwas, was Sie vor dem ersten Gespräch mit uns teilen möchten?</label>
                  <Textarea
                    value={formData.additionalComments}
                    onChange={(e) => updateFormData('additionalComments', e.target.value)}
                    placeholder="(Offenes Feld für Texteingabe)"
                    rows={5}
                  />
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-3">✅ Ende des Formulars</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Vielen Dank für Ihre Zeit! Basierend auf Ihren Antworten werden wir uns so schnell wie möglich bei Ihnen melden, 
                    um ein Gespräch zu vereinbaren und zu sehen, ob und wie wir eine erfolgreiche Zusammenarbeit erreichen können.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-zinc-700">
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="group flex items-center space-x-2 px-6 py-3 border-zinc-600 text-gray-300 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-200 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span className="font-medium">Zurück</span>
              </Button>
              
              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-200 disabled:opacity-50"
                >
                  <span>Weiter</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              ) : (
                <div className="flex flex-col items-end space-y-3">
                  {submitError && (
                    <div className="text-red-400 text-sm bg-red-900/20 border border-red-500/30 rounded-lg px-4 py-2">
                      {submitError}
                    </div>
                  )}
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-200 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Wird gesendet...' : 'Formular absenden'}</span>
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <CheckCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    )}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}