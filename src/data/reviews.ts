export type Review = {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  color: string;
};

export const reviews: Review[] = [
  {
    name: "Sahithi Reddy",
    initials: "SR",
    rating: 5,
    date: "2 weeks ago",
    color: "bg-[#D97706]",
    text:
      "Probably my favourite café in Hanamkonda right now. Good coffee, calm atmosphere and enough space to just sit for hours without feeling awkward.",
  },

  {
    name: "Arjun K",
    initials: "AK",
    rating: 4,
    date: "6 days ago",
    color: "bg-[#2563EB]",
    text:
      "Went here after seeing it on Instagram. Interiors are beautiful and the cold coffee was really good.",
  },

  {
    name: "Meghana T",
    initials: "MT",
    rating: 5,
    date: "1 month ago",
    color: "bg-[#059669]",
    text:
      "Very peaceful compared to most cafés around Warangal. Lighting and music are perfect for evening conversations.",
  },

  {
    name: "Rahul Bhukya",
    initials: "RB",
    rating: 5,
    date: "3 weeks ago",
    color: "bg-[#DC2626]",
    text:
      "Coffee quality is surprisingly consistent and the staff are genuinely polite.",
  },

  {
    name: "Pooja Iyer",
    initials: "PI",
    rating: 5,
    date: "4 days ago",
    color: "bg-[#7C3AED]",
    text:
      "The tiramisu and burnt cheesecake are both excellent. Honestly feels like something you'd expect in Hyderabad.",
  },

  {
    name: "Karthik N",
    initials: "KN",
    rating: 4,
    date: "2 months ago",
    color: "bg-[#0891B2]",
    text:
      "Good place to work remotely. Wifi is stable and not too noisy during afternoons.",
  },
];
