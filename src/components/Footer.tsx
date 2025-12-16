import { Heart, MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  onPrayerRequest?: () => void;
  onGiveOnline?: () => void;
  onVolunteer?: () => void;
  onNewsletter?: () => void;
  onSermons?: () => void;
  onBibleStudies?: () => void;
  onDevotionals?: () => void;
}

export function Footer({
  onPrayerRequest,
  onGiveOnline,
  onVolunteer,
  onNewsletter,
  onSermons,
  onBibleStudies,
  onDevotionals,
}: FooterProps) {
  const footerLinks = {
    "Quick Links": [
      { name: "About Us", href: "#about" },
      { name: "Events", href: "#events" },
      { name: "Ministries", href: "#ministries" },
      { name: "Contact", href: "#contact" },
    ],
    Connect: [
      {
        name: "Prayer Requests",
        href: "#",
        onClick: onPrayerRequest,
      },
      { name: "Give Online", href: "#", onClick: onGiveOnline },
      { name: "Volunteer", href: "#", onClick: onVolunteer },
      { name: "Newsletter", href: "#", onClick: onNewsletter },
    ],
    Resources: [
      { name: "Sermons", href: "#", onClick: onSermons },
      {
        name: "Bible Studies",
        href: "#",
        onClick: onBibleStudies,
      },
      {
        name: "Devotionals",
        href: "#",
        onClick: onDevotionals,
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NewBreed
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  A thriving faith community in Ghana where
                  young believers encounter God's love, purpose,
                  and endless possibilities. Join us as we grow
                  together in faith and make a difference in our
                  generation.
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>
                      NewBreed ICGC Believers' Temple{" "}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>+233 24 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>info@newbreedyouth.org</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(
              ([title, links]) => (
                <div
                  key={title}
                  className="flex flex-col gap-4"
                >
                  <h4 className="text-lg font-semibold">
                    {title}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        {link.onClick ? (
                          <button
                            onClick={link.onClick}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <a
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>by the NewBreed  ICGC Believers' Temple</span>
              </div>
              <div className="text-gray-400 text-sm">
                © 2025 NewBreed Youth Church. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}