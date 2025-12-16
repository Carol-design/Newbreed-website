import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { MinistriesSection } from './components/MinistriesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrayerRequestScreen } from './components/PrayerRequestScreen';
import { GiveOnlineScreen } from './components/GiveOnlineScreen';
import { VolunteerScreen } from './components/VolunteerScreen';
import { NewsletterScreen } from './components/NewsletterScreen';
import { SermonsScreen } from './components/SermonsScreen';
import { BibleStudiesScreen } from './components/BibleStudiesScreen';
import { DevotionalsScreen } from './components/DevotionalsScreen';
import { JoinCommunityScreen } from './components/JoinCommunityScreen';
import { EventRegistrationScreen } from './components/EventRegistrationScreen';
import { FullCalendarScreen } from './components/FullCalendarScreen';
import { AllEventsScreen } from './components/AllEventsScreen';

export default function App() {
  const [showPrayerRequest, setShowPrayerRequest] = useState(false);
  const [showGiveOnline, setShowGiveOnline] = useState(false);
  const [showVolunteer, setShowVolunteer] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showSermons, setShowSermons] = useState(false);
  const [showBibleStudies, setShowBibleStudies] = useState(false);
  const [showDevotionals, setShowDevotionals] = useState(false);
  const [showJoinCommunity, setShowJoinCommunity] = useState(false);
  const [showEventRegistration, setShowEventRegistration] = useState(false);
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const [showAllEvents, setShowAllEvents] = useState(false);

  if (showAllEvents) {
    return (
      <AllEventsScreen 
        onBack={() => setShowAllEvents(false)}
        onRegister={() => {
          setShowAllEvents(false);
          setShowEventRegistration(true);
        }}
        onViewCalendar={() => {
          setShowAllEvents(false);
          setShowFullCalendar(true);
        }}
      />
    );
  }

  if (showFullCalendar) {
    return (
      <FullCalendarScreen 
        onBack={() => setShowFullCalendar(false)}
        onRegister={() => {
          setShowFullCalendar(false);
          setShowEventRegistration(true);
        }}
      />
    );
  }

  if (showEventRegistration) {
    return (
      <EventRegistrationScreen 
        onBack={() => setShowEventRegistration(false)}
      />
    );
  }

  if (showJoinCommunity) {
    return (
      <JoinCommunityScreen 
        onBack={() => setShowJoinCommunity(false)}
      />
    );
  }

  if (showPrayerRequest) {
    return (
      <PrayerRequestScreen 
        onBack={() => setShowPrayerRequest(false)}
      />
    );
  }

  if (showGiveOnline) {
    return (
      <GiveOnlineScreen 
        onBack={() => setShowGiveOnline(false)}
      />
    );
  }

  if (showVolunteer) {
    return (
      <VolunteerScreen 
        onBack={() => setShowVolunteer(false)}
      />
    );
  }

  if (showNewsletter) {
    return (
      <NewsletterScreen 
        onBack={() => setShowNewsletter(false)}
      />
    );
  }

  if (showSermons) {
    return (
      <SermonsScreen 
        onBack={() => setShowSermons(false)}
      />
    );
  }

  if (showBibleStudies) {
    return (
      <BibleStudiesScreen 
        onBack={() => setShowBibleStudies(false)}
      />
    );
  }

  if (showDevotionals) {
    return (
      <DevotionalsScreen 
        onBack={() => setShowDevotionals(false)}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation 
        onPrayerRequest={() => setShowPrayerRequest(true)}
        onJoinCommunity={() => setShowJoinCommunity(true)}
      />
      <HeroSection onJoinCommunity={() => setShowJoinCommunity(true)} />
      <AboutSection />
      <EventsSection 
        onRegister={() => setShowEventRegistration(true)}
        onViewCalendar={() => setShowFullCalendar(true)}
        onViewAllEvents={() => setShowAllEvents(true)}
      />
      <MinistriesSection onJoinCommunity={() => setShowJoinCommunity(true)} />
      <ContactSection />
      <Footer 
        onPrayerRequest={() => setShowPrayerRequest(true)}
        onGiveOnline={() => setShowGiveOnline(true)}
        onVolunteer={() => setShowVolunteer(true)}
        onNewsletter={() => setShowNewsletter(true)}
        onSermons={() => setShowSermons(true)}
        onBibleStudies={() => setShowBibleStudies(true)}
        onDevotionals={() => setShowDevotionals(true)}
      />
    </div>
  );
}