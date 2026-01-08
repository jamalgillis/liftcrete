export interface Project {
  slug: string;
  image: string;
  images: string[];
  alt: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  achievements: string[];
  details: {
    location: string;
    size: string;
    duration: string;
    completed: string;
  };
}

export const projects: Project[] = [
  {
    slug: "downtown-office-complex",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
    ],
    alt: "Commercial Building",
    category: "Commercial",
    title: "Downtown Office Complex",
    description: "Complete foundation leveling for a 15,000 sq ft commercial office building in downtown Waco. Restored structural integrity without business interruption.",
    fullDescription: "This major commercial project involved precision concrete lifting for a multi-story office building experiencing significant foundation settlement. The building had developed noticeable floor unevenness, causing doors to stick and creating potential safety hazards.\n\nOur team worked after business hours to minimize disruption to the building's tenants. Using our advanced polyurethane injection system, we strategically lifted the foundation back to level over the course of three days.\n\nThe project required careful coordination with building management and precise monitoring of lift progress to ensure uniform leveling across the entire foundation footprint.",
    achievements: [
      "Lifted 15,000 sq ft of foundation",
      "Zero business interruption",
      "Completed 60% under budget vs. replacement",
      "5-year structural warranty provided"
    ],
    details: {
      location: "Downtown Waco, TX",
      size: "15,000 sq ft",
      duration: "3 Days",
      completed: "October 2024"
    }
  },
  {
    slug: "distribution-center",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
    ],
    alt: "Industrial Warehouse",
    category: "Industrial",
    title: "Distribution Center",
    description: "Large-scale warehouse floor stabilization project. Lifted and leveled over 25,000 sq ft of industrial flooring for improved forklift operations.",
    fullDescription: "This industrial project addressed severe floor settlement in a busy distribution center that was impacting forklift operations and creating safety concerns. Uneven floors were causing product damage and slowing down warehouse operations.\n\nWorking in sections to allow continued operations, our team systematically lifted and leveled the warehouse floor over a two-week period. The polyurethane foam injection method was ideal for this application due to its high load-bearing capacity and rapid cure time.\n\nThe result was a perfectly level floor surface capable of supporting heavy forklift traffic and pallet racking systems.",
    achievements: [
      "25,000 sq ft of floor leveled",
      "Operations continued during repair",
      "Improved forklift efficiency by 30%",
      "Eliminated product damage from uneven surfaces"
    ],
    details: {
      location: "Robinson, TX",
      size: "25,000 sq ft",
      duration: "2 Weeks",
      completed: "September 2024"
    }
  },
  {
    slug: "luxury-estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    alt: "Residential Home",
    category: "Residential",
    title: "Luxury Estate Restoration",
    description: "Comprehensive driveway and patio restoration for a high-end residential property. Eliminated trip hazards and restored curb appeal.",
    fullDescription: "This residential project involved restoring a beautiful estate's exterior concrete surfaces that had settled over time. The homeowner was facing quotes of over $40,000 to tear out and replace their expansive driveway and patio areas.\n\nOur polyurethane lifting solution provided a cost-effective alternative that preserved the existing decorative concrete while eliminating all trip hazards and drainage issues. The work was completed in just two days with minimal disruption to the homeowner.\n\nThe results exceeded expectations, with the driveway and patio restored to their original level positions and the decorative stamped concrete patterns preserved.",
    achievements: [
      "Saved homeowner over $25,000",
      "Preserved decorative stamped concrete",
      "Eliminated all trip hazards",
      "Restored proper drainage flow"
    ],
    details: {
      location: "Woodway, TX",
      size: "3,500 sq ft",
      duration: "2 Days",
      completed: "August 2024"
    }
  },
  {
    slug: "municipal-parking",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&q=80",
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=800&q=80",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
      "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?w=800&q=80"
    ],
    alt: "Parking Structure",
    category: "Commercial",
    title: "Municipal Parking Garage",
    description: "Multi-level parking deck repair including joint stabilization and surface leveling. Completed during off-hours to minimize public impact.",
    fullDescription: "This public infrastructure project required careful planning and execution to repair a municipal parking structure while minimizing impact on downtown visitors and businesses. The parking deck had developed significant settlement issues causing water pooling and structural concerns.\n\nOur team worked exclusively during overnight hours, completing sections that could be reopened each morning. The project involved not only lifting settled slabs but also stabilizing expansion joints and improving surface drainage.\n\nThe city was extremely pleased with the minimal disruption and the substantial cost savings compared to traditional repair methods.",
    achievements: [
      "Completed 100% during off-hours",
      "Zero public access disruption",
      "Improved drainage eliminated ponding",
      "Extended structure lifespan by 20+ years"
    ],
    details: {
      location: "Waco, TX",
      size: "8,000 sq ft",
      duration: "5 Nights",
      completed: "July 2024"
    }
  },
  {
    slug: "airport-tarmac",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
      "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&q=80"
    ],
    alt: "Construction Site",
    category: "Industrial",
    title: "Airport Tarmac Rehabilitation",
    description: "Critical infrastructure repair for regional airport taxiway. Precision lifting to meet strict FAA surface tolerance requirements.",
    fullDescription: "This critical infrastructure project required meeting stringent FAA requirements for taxiway surface tolerances. The regional airport's taxiway had developed settlement issues that were affecting aircraft operations and required immediate attention.\n\nOur team worked closely with airport operations and FAA inspectors to develop a repair plan that would meet all regulatory requirements while minimizing runway closure time. The precision of polyurethane lifting was essential to achieve the tight tolerances required.\n\nAll work was completed during scheduled closure windows, and the taxiway passed FAA inspection on the first attempt.",
    achievements: [
      "Met all FAA surface tolerances",
      "Passed inspection on first attempt",
      "Minimal closure time required",
      "Critical infrastructure restored safely"
    ],
    details: {
      location: "TSTC Waco Airport",
      size: "12,000 sq ft",
      duration: "1 Week",
      completed: "June 2024"
    }
  },
  {
    slug: "highway-rest-area",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80"
    ],
    alt: "Highway Construction",
    category: "Commercial",
    title: "Highway Rest Area",
    description: "Complete concrete slab leveling for high-traffic rest area. Restored safe pedestrian walkways and vehicle parking surfaces.",
    fullDescription: "This TxDOT project involved rehabilitating a busy highway rest area that serves thousands of travelers daily. Years of heavy truck traffic had caused significant settlement throughout the parking areas and pedestrian walkways.\n\nSafety was the primary concern, with numerous trip hazards identified throughout the facility. Our team developed a phased approach that allowed portions of the rest area to remain open while repairs were completed.\n\nThe project was completed ahead of schedule, and the rest area now provides safe, level surfaces for all visitors.",
    achievements: [
      "Eliminated 47 trip hazards",
      "Rest area remained partially open",
      "Completed ahead of schedule",
      "ADA compliance restored"
    ],
    details: {
      location: "I-35 Rest Area, TX",
      size: "18,000 sq ft",
      duration: "10 Days",
      completed: "May 2024"
    }
  },
  {
    slug: "sunken-driveway",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
    ],
    alt: "Residential Driveway",
    category: "Residential",
    title: "Sunken Driveway Repair",
    description: "Lifted severely settled driveway back to original grade. Homeowner saved over 60% compared to full replacement quote.",
    fullDescription: "This residential project showcases the dramatic cost savings possible with polyurethane concrete lifting. The homeowner had received quotes exceeding $15,000 to tear out and replace their severely settled driveway.\n\nThe driveway had sunk up to 4 inches in some areas, creating a dangerous condition and causing water to pool against the garage foundation. Our team was able to lift the entire driveway back to its original position in just one day.\n\nThe homeowner was thrilled with the results and the substantial savings, and has since referred several neighbors to our services.",
    achievements: [
      "Lifted slabs up to 4 inches",
      "Saved homeowner over $10,000",
      "Completed in single day",
      "Stopped water intrusion at garage"
    ],
    details: {
      location: "Hewitt, TX",
      size: "800 sq ft",
      duration: "1 Day",
      completed: "April 2024"
    }
  },
  {
    slug: "pool-deck-leveling",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
      "https://images.unsplash.com/photo-1572331165267-854da2b021aa?w=800&q=80",
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80"
    ],
    alt: "Pool Deck",
    category: "Residential",
    title: "Pool Deck Leveling",
    description: "Corrected uneven pool deck that was causing water drainage issues. Used water-resistant foam for long-lasting results.",
    fullDescription: "This pool deck project addressed both safety and drainage concerns for a family with young children. The settled deck was creating trip hazards around the pool and causing water to drain toward the home's foundation rather than away from it.\n\nOur water-resistant polyurethane foam was the perfect solution for this application, as it won't absorb moisture or degrade in the wet pool environment. The lightweight foam also puts minimal additional stress on the underlying soil.\n\nThe family can now enjoy their pool area safely, with proper drainage protecting their home's foundation.",
    achievements: [
      "Eliminated pool area trip hazards",
      "Restored proper drainage slope",
      "Water-resistant foam won't degrade",
      "Family safety restored"
    ],
    details: {
      location: "Lorena, TX",
      size: "1,200 sq ft",
      duration: "1 Day",
      completed: "March 2024"
    }
  },
  {
    slug: "retail-shopping-center",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80"
    ],
    alt: "Retail Store",
    category: "Commercial",
    title: "Retail Shopping Center",
    description: "Sidewalk and entrance leveling for busy retail location. Work completed overnight to avoid disrupting customer traffic.",
    fullDescription: "This retail project required creative scheduling to avoid any impact on customer traffic during business hours. The shopping center's main entrance and surrounding sidewalks had developed significant settlement, creating liability concerns for the property management company.\n\nOur team completed all work between 10 PM and 6 AM, with surfaces ready for foot traffic each morning when stores opened. The property manager was impressed with our ability to work quietly and efficiently without disturbing neighboring businesses.\n\nThe leveled surfaces have eliminated trip hazard liability concerns and improved the center's curb appeal.",
    achievements: [
      "100% overnight work",
      "Zero customer disruption",
      "Liability concerns eliminated",
      "Improved property appearance"
    ],
    details: {
      location: "Bellmead, TX",
      size: "4,500 sq ft",
      duration: "3 Nights",
      completed: "February 2024"
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, category: string, limit: number = 3): Project[] {
  return projects
    .filter(p => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
