"use strict"


const allData= {
 introText: [
  "Turn your dreams into an achievement while building with Us.",
  "Collaborating with us means scaling your business to greater heights.",
  "We don't just offer services, what we offer is trust and confidence ",
  "What are you waiting for, jump in and sign up for more."
  ],
 quoteText: [
  "The way i see it, if you want the rainbow you gota put up with the rain.",
  "Remember when you forgive you heal and when you let go you grow.",
  "You are enough just as you are.",
  "it keeps you happy keep it quiet",
  "Every decision for something is a decision against another.",
  "Everything has beauty but not everyone sees it."
  ],
 smallCardData: [
  {
   img: "/assets/icons/extension_black_24dp.svg",
   h3: "Quick Services",
   p: "Your services are treated and served at a glance."
  },{
   img: "/assets/icons/form.svg",
   h3:"Project planning",
   p:"We plan ahead, of time for the best results."
  },{
   img: "/assets/icons/paid_black_24dp.svg",
   h3:"Cost Effective",
   p:"Your payments are valued and are for the best of all."
  }
  ],
  majorCardData_1: [
   {
    img: "/assets/images/webDev.jpeg",
    price: "$100",
    cancel: "$162",
    h3: "Desktop and Mobile Web development, providing the best for your clients.",
    review: "4.1k +"
   },
   {
    img: "/assets/images/network-architecture.jpg",
    price: "$255",
    cancel: "$320",
    h3: "Network architecture And data management , keeping your informations secured.",
    review: "3.9k +"
   },
   {
    img: "/assets/images/design_2.jpg",
     price: "$75",
     cancel: "$110",
     h3: "UX/UI designing providing beauty and simplicity",
     review: "4.5k +"
   },
   {
    img: "/assets/images/teacher.jpg",
     price: "$100",
     cancel: "$150",
     h3: "Owner of a school? and in need of professional science tutors search no more.",
     review: "4.0k +"
   },
   {
    img: "/assets/images/Bg-unsplash.jpg",
     price: "$180",
     cancel: "$280",
     h3: "Learn crypto and mining with while gaining",
     review: "3.5k +"
   },
   {
    img: "/assets/images/The-Role-of-Marketing-1_2.jpg",
     price: "$200",
     cancel: "$230",
     h3: "Nothing can shake a business well planned no matter the odds, manage it with Us.",
     review: "3.5k +"
   }
   ],
  majorCardData_2: function(){
   return this.majorCardData_1.sort(()=> 0.5 - Math.random())
  },
   projectData: [
    {
     img: "",
     h3:"",
     p: "",
     link: ""
    }
    ,{
     img: "",
     h3:"",
     p: "",
     link: ""
    }
    ,{
     img: "",
      h3: "",
      p: "",
      link: ""
    }
    ]

}

export default allData
