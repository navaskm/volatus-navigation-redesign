"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    label: "Equipment",
    href: "/equipment",
    children: [
      {
        label: "Drone",
        href: "/equipment/drone",
        children: [
          { label: "Drone Store", href: "/equipment/drone/store" },
          { label: "Trade-In Program", href: "/equipment/drone/trade-in" },
          { label: "Vetted by Volatus", href: "/equipment/drone/vetted" },
        ],
      },
      {
        label: "Specialist Payload",
        href: "/equipment/payload",
        children: [
          { label: "Thermography", href: "/equipment/payload/thermography" },
          { label: "LIDAR", href: "/equipment/payload/lidar" },
          { label: "Multispectral", href: "/equipment/payload/multispectral" },
          { label: "Gas Detection", href: "/equipment/payload/gas-detection" },
          { label: "Visual Imaging", href: "/equipment/payload/visual-imaging" },
          { label: "Other", href: "/equipment/payload/other" },
        ],
      },
      {
        label: "Software",
        href: "/equipment/software",
        children: [
          { label: "Browse Software", href: "/equipment/software/browse" },
        ],
      },
      {
        label: "Accessories",
        href: "/equipment/accessories",
        children: [
          { label: "Dock", href: "/equipment/accessories/dock" },
          { label: "Batteries & Charger", href: "/equipment/accessories/batteries" },
          { label: "Control System", href: "/equipment/accessories/control-system" },
          { label: "Tether Station", href: "/equipment/accessories/tether-station" },
          { label: "Power Station", href: "/equipment/accessories/power-station" },
        ],
      },
      {
        label: "Volatus Engineering",
        href: "/equipment/engineering",
        children: [
          { label: "Aerieport Drone Nesting Station", href: "/equipment/engineering/aerieport" },
          { label: "Canary", href: "/equipment/engineering/canary" },
          { label: "Condor", href: "/equipment/engineering/condor" },
          { label: "DroneSpot", href: "/equipment/engineering/dronespot" },
        ],
      },
    ],
  },
  {
    label: "Service",
    href: "/service",
    children: [
      {
        label: "Inspection",
        href: "/service/inspection",
        children: [
          { label: "Thermography", href: "/service/inspection/thermography" },
          { label: "Multispectral", href: "/service/inspection/multispectral" },
          { label: "Gas Detection", href: "/service/inspection/gas-detection" },
          { label: "LIDAR", href: "/service/inspection/lidar" },
          { label: "Digital Twin", href: "/service/inspection/digital-twin" },
          { label: "Crewed Inspection", href: "/service/inspection/crewed" },
        ],
      },
      {
        label: "Bespoke Aerial Service",
        href: "/service/bespoke",
        children: [
          { label: "Border Security: Surveillance as a Service", href: "/service/bespoke/border-security" },
          { label: "Pipeline Service", href: "/service/bespoke/pipeline" },
          { label: "Wildfire Service", href: "/service/bespoke/wildfire" },
          { label: "Asset Inspection", href: "/service/bespoke/asset-inspection" },
          { label: "Airport Survey & Inspection", href: "/service/bespoke/airport-survey" },
          { label: "Remote Operations & Cargo", href: "/service/bespoke/remote-operations" },
        ],
      },
      {
        label: "Cargo",
        href: "/service/cargo",
        children: [
          { label: "Cargo Solution", href: "/service/cargo/solution" },
        ],
      },
    ],
  },
  {
    label: "Academy",
    href: "/academy",
    children: [
      {
        label: "Pilot Training",
        href: "/academy/pilot-training",
        children: [
          { label: "UK Drone Training", href: "/academy/pilot-training/uk" },
          { label: "Canada Training", href: "/academy/pilot-training/canada" },
        ],
      },
      {
        label: "Specialist Training",
        href: "/academy/specialist-training",
        children: [
          { label: "Thermography", href: "/academy/specialist-training/thermography" },
          { label: "Multispectral", href: "/academy/specialist-training/multispectral" },
          { label: "Gas Detection", href: "/academy/specialist-training/gas-detection" },
          { label: "LIDAR", href: "/academy/specialist-training/lidar" },
          { label: "Digital Twin", href: "/academy/specialist-training/digital-twin" },
        ],
      },
    ],
  },
  {
    label: "Investor",
    href: "/investor",
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Oil & Gas", href: "/industries/oil-gas" },
      { label: "Energy & Utilities", href: "/industries/energy-utilities" },
      { label: "Construction & Engineering", href: "/industries/construction" },
      { label: "Defense", href: "/industries/defense" },
      { label: "Forestry & Conservation", href: "/industries/forestry" },
      { label: "Government and Public Agencies", href: "/industries/government" },
      { label: "Infrastructure & Transportation", href: "/industries/infrastructure" },
      { label: "Mining & Aggregate", href: "/industries/mining" },
      { label: "Precision Agriculture", href: "/industries/agriculture" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Volatus New Drone Network", href: "/about/drone-network" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const renderNavItem = (item: NavItem, level: number = 0, isMobile: boolean = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activeDropdown === item.label;

    return (
      <li key={item.label} className={`relative ${level === 0 && !isMobile ? "group" : ""}`}>
        {hasChildren ? (
          <>
            <button
              onClick={() => handleDropdownToggle(item.label)}
              className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium w-full text-left"
            >
              {item.label}
              <svg
                className={`w-4 h-4 transition-transform flex-shrink-0 ${isActive ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {(isActive || (level === 0 && !isMobile)) && (
              <ul
                className={`${
                  level === 0 && !isMobile
                    ? "absolute left-0 top-full mt-1 w-64 bg-white shadow-lg rounded-lg py-2 z-50 hidden group-hover:block"
                    : isMobile && isActive
                    ? "block pl-4 mt-1"
                    : "hidden"
                }`}
              >
                {item.children?.map((child) => renderNavItem(child, level + 1, isMobile))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={item.href}
            className="block px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        )}
      </li>
    );
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Volatus Aerospace</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => renderNavItem(item, 0, false))}
          </ul>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors">
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors">
                FR
              </button>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <ul className="space-y-2">
              {navigation.map((item) => renderNavItem(item, 0, true))}
            </ul>
            <div className="mt-4 pt-4 border-t flex items-center justify-center space-x-2">
              <button className="px-3 py-1 text-sm font-medium text-primary-600">EN</button>
              <span className="text-gray-300">|</span>
              <button className="px-3 py-1 text-sm font-medium text-gray-500">FR</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

