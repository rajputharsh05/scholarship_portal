const data = {
    "scholarships": [
      {
        "name": "National Merit Scholarship",
        "description": "A highly prestigious scholarship awarded to students based on their academic achievement and performance on the PSAT.",
        "amount": "$10,000",
        "eligibility": "High school seniors",
        "deadline": "October 1, 2023",
        "website": "https://www.nationalmerit.org/"
      },
      {
        "name": "Gates Millennium Scholars Program",
        "description": "A scholarship program funded by the Bill & Melinda Gates Foundation to provide opportunities for outstanding minority students.",
        "amount": "Full tuition",
        "eligibility": "Minority high school seniors",
        "deadline": "January 15, 2024",
        "website": "https://www.gmsp.org/"
      },
      {
        "name": "Jackie Robinson Foundation Scholarship",
        "description": "A scholarship program that supports minority students with leadership potential and a commitment to community service.",
        "amount": "$30,000",
        "eligibility": "Minority high school seniors",
        "deadline": "February 1, 2024",
        "website": "https://www.jackierobinson.org/"
      },
      {
        "name": "Coca-Cola Scholars Program",
        "description": "A scholarship program recognizing students with leadership, service, and academic excellence.",
        "amount": "$20,000",
        "eligibility": "High school seniors",
        "deadline": "October 31, 2023",
        "website": "https://www.coca-colascholars.org/"
      },
      {
        "name": "Horatio Alger Scholarship Program",
        "description": "Scholarships awarded to students who have overcome adversity and demonstrate perseverance in pursuing their education.",
        "amount": "$25,000",
        "eligibility": "High school seniors",
        "deadline": "October 25, 2023",
        "website": "https://www.horatioalger.org/"
      },
      {
        "name": "Ron Brown Scholar Program",
        "description": "Scholarships awarded to academically talented African American high school seniors who demonstrate leadership and community service.",
        "amount": "Full tuition",
        "eligibility": "African American high school seniors",
        "deadline": "November 1, 2023",
        "website": "https://www.ronbrown.org/"
      },
      {
        "name": "Elks National Foundation Most Valuable Student Competition",
        "description": "Scholarships awarded based on leadership, academic achievement, and financial need.",
        "amount": "Up to $50,000",
        "eligibility": "High school seniors",
        "deadline": "November 15, 2023",
        "website": "https://www.elks.org/scholars/"
      },
      {
        "name": "TheDream.US Scholarship",
        "description": "Scholarships for immigrant students who have DACA (Deferred Action for Childhood Arrivals) or TPS (Temporary Protected Status).",
        "amount": "Varies",
        "eligibility": "High school seniors or community college graduates",
        "deadline": "February 28, 2024",
        "website": "https://www.thedream.us/"
      },
      {
        "name": "Dell Scholars Program",
        "description": "Scholarships and support services for students from low-income households who are pursuing a college degree.",
        "amount": "$20,000",
        "eligibility": "High school seniors",
        "deadline": "December 1, 2023",
        "website": "https://www.dellscholars.org/"
      },
      {
        "name": "Jeannette Rankin Women's Scholarship Fund",
        "description": "Scholarships for low-income women, ages 35 and older, who are pursuing a college degree.",
        "amount": "Varies",
        "eligibility": "Low-income women, 35 years or older",
        "deadline": "March 1, 2024",
        "website": "https://www.rankinfoundation.org/"
      },
      {
        "name": "Buick Achievers Scholarship Program",
        "description": "Scholarships for students who excel academically and are interested in a career in the automotive or related industries.",
        "amount": "$25,000",
        "eligibility": "High school seniors or current undergraduate students",
        "deadline": "November 1, 2023",
        "website": "https://www.buickachievers.com/"
      },
      {
        "name": "Davidson Fellows Scholarship",
        "description": "Scholarships for students who have completed a significant piece of work in science, technology, engineering, mathematics, literature, music, or philosophy.",
        "amount": "Up to $50,000",
        "eligibility": "Students under 18 years old",
        "deadline": "February 12, 2024",
        "website": "https://www.davidsongifted.org/fellows-scholarship/"
      },
      {
        "name": "UNCF Scholarships",
        "description": "Scholarships and internships for African American students attending historically black colleges and universities (HBCUs).",
        "amount": "Varies",
        "eligibility": "African American students",
        "deadline": "Varies (multiple scholarships available)",
        "website": "https://www.uncf.org/scholarships"
      },
      {
        "name": "Hispanic Scholarship Fund",
        "description": "Scholarships for Hispanic students pursuing higher education.",
        "amount": "Varies",
        "eligibility": "Hispanic high school seniors, undergraduates, and graduate students",
        "deadline": "February 15, 2024",
        "website": "https://www.hsf.net/"
      },
      {
        "name": "Thiel Fellowship",
        "description": "A fellowship program that supports young entrepreneurs who want to build new technologies or start their own companies.",
        "amount": "$100,000",
        "eligibility": "Young entrepreneurs under 23 years old",
        "deadline": "September 30, 2023",
        "website": "https://thielfellowship.org/"
      },
      {
        "name": "The Point Foundation Scholarship",
        "description": "Scholarships for LGBTQ+ students who demonstrate leadership, academic excellence, and financial need.",
        "amount": "Varies",
        "eligibility": "LGBTQ+ high school seniors or current college students",
        "deadline": "January 29, 2024",
        "website": "https://www.pointfoundation.org/"
      },
      {
        "name": "GE-Reagan Foundation Scholarship Program",
        "description": "Scholarships for high school seniors who demonstrate leadership, drive, integrity, and citizenship.",
        "amount": "$10,000",
        "eligibility": "High school seniors",
        "deadline": "January 5, 2024",
        "website": "https://www.reaganfoundation.org/education/scholarship-programs/"
      },
      {
        "name": "National Italian American Foundation (NIAF) Scholarship",
        "description": "Scholarships for Italian American students who have demonstrated outstanding potential and high academic achievements.",
        "amount": "Varies",
        "eligibility": "Italian American high school seniors and current college students",
        "deadline": "March 1, 2024",
        "website": "https://www.niaf.org/programs/scholarships/"
      },
      {
        "name": "NSHSS Foundation STEM Scholarships",
        "description": "Scholarships for high school seniors pursuing STEM (Science, Technology, Engineering, and Mathematics) majors.",
        "amount": "$1,000 - $5,000",
        "eligibility": "High school seniors",
        "deadline": "April 1, 2024",
        "website": "https://www.nshssfoundation.org/scholarships/stem-scholarships/"
      },
      {
        "name": "The Vegetarian Resource Group Scholarship",
        "description": "Scholarships for graduating U.S. high school students who have promoted vegetarianism in their schools and communities.",
        "amount": "$10,000",
        "eligibility": "High school seniors",
        "deadline": "February 20, 2024",
        "website": "https://www.vrg.org/student/scholar.htm"
      }
    ]
  }
  
export default data;