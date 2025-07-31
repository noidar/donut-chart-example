import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sectors data - first series (hidden inner ring)
    const sectorsData = [
      {
        name: "Industrials",
        y: 19.5,
        color: "#8B5CF6", // Purple
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Financial Services",
        y: 16.7,
        color: "#10B981", // Green
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Healthcare",
        y: 13.4,
        color: "#3B82F6", // Blue
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Technology",
        y: 12.7,
        color: "#06B6D4", // Cyan
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Consumer Defensive",
        y: 11.8,
        color: "#A855F7", // Light Purple
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Consumer Cyclical",
        y: 8.4,
        color: "#84CC16", // Light Green
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Communication Services",
        y: 6.8,
        color: "#EF4444", // Red
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Basic Materials",
        y: 4.7,
        color: "#F97316", // Orange
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Utilities",
        y: 3.2,
        color: "#EAB308", // Yellow
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Real Estate",
        y: 1.6,
        color: "#A16207", // Brown/Gold
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Energy",
        y: 0.9,
        color: "#FACC15", // Light Yellow
        dataLabels: {
          enabled: true
        }
      },
      {
        name: "Other",
        y: 0.2,
        color: "#6B7280", // Gray
        dataLabels: {
          enabled: true
        }
      }
    ];

    // Industries data - second series (visible outer ring)
    const industriesData = [
      {
        name: "Chemicals",
        y: 0.2056050689930634,
        color: "#F97316", // Orange
        sector: "Basic Materials",
        topAssets: "BASF",
        sectorWeight: 4.7
      },
      {
        name: "Chemicals - Specialty",
        y: 2.389603288750437,
        color: "#F97316", // Orange
        sector: "Basic Materials",
        topAssets: "Symrise, Covestro, Air Liquide",
        sectorWeight: 4.7
      },
      {
        name: "Construction Materials",
        y: 0.75,
        color: "#F97316", // Orange
        sector: "Basic Materials",
        topAssets: "Heidelberg Materials, Buzzi Unicem",
        sectorWeight: 4.7
      },
      {
        name: "Copper",
        y: 0.1122117842657513,
        color: "#F97316", // Orange
        sector: "Basic Materials",
        topAssets: "Aurubis",
        sectorWeight: 4.7
      },
      {
        name: "Industrial Materials",
        y: 1.008595897545376,
        color: "#F97316", // Orange
        sector: "Basic Materials",
        topAssets: "BOLIDEN AB, Rio Tinto",
        sectorWeight: 4.7
      },
      {
        name: "Paper, Lumber & Forest Products",
        y: 0.2643466332679951,
        color: "#F97316", // Orange
        sector: "Basic Materials",
        topAssets: "UPM Kymmene",
        sectorWeight: 4.7
      },
      {
        name: "Advertising Agencies",
        y: 0.04312708726328706,
        color: "#EF4444", // Red
        sector: "Communication Services",
        topAssets: "Stroeer",
        sectorWeight: 6.797067498675913
      },
      {
        name: "Broadcasting",
        y: 0.1865240767718684,
        color: "#EF4444", // Red
        sector: "Communication Services",
        topAssets: "Tegna, E.W. Scripps Company Registered (A)",
        sectorWeight: 6.797067498675913
      },
      {
        name: "Entertainment",
        y: 0.775266458852798,
        color: "#EF4444", // Red
        sector: "Communication Services",
        topAssets: "Fox, Eventim, Bolloré",
        sectorWeight: 6.797067498675913
      },
      {
        name: "Internet Content & Information",
        y: 1.070920256683184,
        color: "#EF4444", // Red
        sector: "Communication Services",
        topAssets: "Tencent",
        sectorWeight: 6.797067498675913
      },
      {
        name: "Publishing",
        y: 0.1044444569280673,
        color: "#EF4444", // Red
        sector: "Communication Services",
        topAssets: "RELX",
        sectorWeight: 6.797067498675913
      },
      {
        name: "Telecommunications Services",
        y: 4.616785162176708,
        color: "#EF4444", // Red
        sector: "Communication Services",
        topAssets: "Deutsche Telekom, SoftBank, Nippon Telegraph & Telephone",
        sectorWeight: 6.797067498675913
      },
      {
        name: "Apparel - Footwear & Accessories",
        y: 1.024333945673757,
        color: "#84CC16", // Light Green
        sector: "Consumer Cyclical",
        topAssets: "Deckers Outdoor, Adidas, Puma",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Apparel - Retail",
        y: 1.043688559653438,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Urban Outfitters, Inditex, Abercrombie & Fitch Co.",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Auto - Dealerships",
        y: 0.2360392535046756,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Copart",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Auto - Manufacturers",
        y: 1.23022606806843,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "BMW (ST), Mercedes-Benz Group, Toyota",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Auto - Parts",
        y: 0.187468129402832,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Knorr-Bremse, Continental, ElringKlinger",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Gambling, Resorts & Casinos",
        y: 0.296430991077633,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Evolution Gaming Group",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Home Improvement",
        y: 0.03186753271350202,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Hornbach Holding",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Leisure",
        y: 0.4123284182164633,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Shimano, ORIENTAL LAND CO.",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Luxury Goods",
        y: 0.2501739472053464,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Hermes International, LVMH",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Packaging & Containers",
        y: 0.06198204411877575,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Huhtamaki",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Personal Products & Services",
        y: 0.2481730161411822,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Rollins, Medifast",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Residential Construction",
        y: 1.024642489704364,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "NVR",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Restaurants",
        y: 0.510890966740149,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Cheesecake Factory, Yum Brands",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Specialty Retail",
        y: 1.804107603445311,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "O'Reilly Automotive, Casey's General Stores, Canadian Tire Ltd (A)",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Travel Services",
        y: 0.082,
        color: "#84CC16",
        sector: "Consumer Cyclical",
        topAssets: "Amadeus IT Group",
        sectorWeight: 8.443886877037615
      },
      {
        name: "Agricultural Inputs & Services",
        y: 1.059395397329417,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "CF Industries Holdings, Archer-Daniels Midland",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Beverages - Alcoholic",
        y: 0.4334002533698772,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Diageo, Brown Forman (B)",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Beverages - Non Alcoholic",
        y: 1.598507690030491,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Coca-Cola, Keurig Dr Pepper",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Confectioners",
        y: 0.7006969067442582,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Mondelez International",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Consumer Discounters",
        y: 0.8039003509455142,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Dollar General, Walmart",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Discount Stores",
        y: 0.4344636031738169,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Costco Wholesale",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Farm Products",
        y: 0.3522709570064172,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Archer-Daniels Midland, Cargill",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Food Distribution",
        y: 0.2473953739853756,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Sysco",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Food Products",
        y: 3.043669547470406,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Nestle, General Mills, Kellogg",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Grocery Stores",
        y: 0.3493649092395742,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Kroger",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Home & Personal Products",
        y: 2.809485423488726,
        color: "#A855F7",
        sector: "Consumer Defensive",
        topAssets: "Procter & Gamble, Unilever, Colgate-Palmolive",
        sectorWeight: 11.83868329086453
      },
      {
        name: "Oil & Gas Drilling",
        y: 0.5140411096986264,
        color: "#FACC15",
        sector: "Energy",
        topAssets: "Suncor Energy, Canadian Natural Resources",
        sectorWeight: 0.8978412546779047
      },
      {
        name: "Oil & Gas Integrated",
        y: 0.3837985104031756,
        color: "#FACC15",
        sector: "Energy",
        topAssets: "Exxon Mobil, Shell",
        sectorWeight: 0.8978412546779047
      },
      {
        name: "Asset Management",
        y: 3.430705734793952,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "BlackRock, T. Rowe Price Group, Brookfield",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Banks - Diversified",
        y: 0.6651936318844883,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "JPMorgan Chase, Bank of America",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Banks - Regional",
        y: 2.373069726779816,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "PNC Financial Services Group, U.S. Bancorp, Bank of Montreal",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Credit Services",
        y: 0.8742398421102024,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "Visa, American Express, Mastercard",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Financial Exchanges",
        y: 1.243701949152997,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "Intercontinental Exchange, CME Group",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Financial Services - Diversified",
        y: 3.962,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "Berkshire Hathaway (B), Charles Schwab",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Insurance - Diversified",
        y: 0.966433127653549,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "AXA, Allianz",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Insurance - Life",
        y: 1.019267162978031,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "MetLife, Prudential Financial",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Insurance - Property & Casualty",
        y: 1.373825655709608,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "Progressive, Travelers Companies, Chubb",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Insurance - Reinsurance",
        y: 0.1926953516061844,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "Reinsurance Group of America",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Insurance - Specialty",
        y: 0.6952675055325588,
        color: "#10B981",
        sector: "Financial Services",
        topAssets: "Aflac, Principal Financial Group",
        sectorWeight: 16.73486888816078
      },
      {
        name: "Biotechnology",
        y: 1.531,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "Moderna, Biogen, Gilead Sciences",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Drug Manufacturers - General",
        y: 5.850419569893754,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "Johnson & Johnson, Pfizer, AbbVie",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Drug Manufacturers - Specialty & Generic",
        y: 1.702,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "Teva Pharmaceutical Industries, Viatris",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Healthcare Plans",
        y: 1.458,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "UnitedHealth Group, Anthem",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Healthcare Providers & Services",
        y: 1.1567395424089644,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "HCA Healthcare, DaVita HealthCare Partners",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Medical Care",
        y: 0.2645829693522455,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "Fresenius Medical Care",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Medical Devices",
        y: 1.3760502983752598,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "Abbott Laboratories, Medtronic, Stryker",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Medical Distribution",
        y: 0.06509695138894843,
        color: "#3B82F6",
        sector: "Healthcare",
        topAssets: "McKesson",
        sectorWeight: 13.40831891217321
      },
      {
        name: "Aerospace & Defense",
        y: 1.794983639647949,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Boeing, Lockheed Martin, Northrop Grumman",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Airlines",
        y: 0.9726945459728037,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "United Airlines Holdings, American Airlines Group, Alaska Air Group",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Business Services",
        y: 0.6425842556999436,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Waste Management, Republic Services",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Conglomerates",
        y: 3.233,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "General Electric, 3M, Honeywell International",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Construction & Engineering",
        y: 0.8473346892001968,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Caterpillar, Fluor, Jacobs Engineering Group",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Consulting & Outsourcing",
        y: 0.19444652138952398,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Accenture",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Electrical Equipment & Parts",
        y: 1.239,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Siemens, ABB, Schneider Electric",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Engineering & Construction",
        y: 0.21096593569024774,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Vinci",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Farm & Heavy Construction Machinery",
        y: 1.3582325031693518,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Deere & Company, CNH Industrial",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Industrial Distribution",
        y: 0.5739726027397235,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "W.W. Grainger, Fastenal",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Infrastructure Operations",
        y: 0.6188000721306628,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Brookfield Infrastructure Partners",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Integrated Freight & Logistics",
        y: 1.2863893616883983,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "United Parcel Service (B), FedEx",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Marine Shipping",
        y: 0.02899280575537451,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "A.P. Moller - Maersk (A)",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Metal Fabrication",
        y: 0.3001844262295046,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Parker-Hannifin",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Pollution & Treatment Controls",
        y: 0.065,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Danaher",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Railroads",
        y: 1.895138888888889,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Union Pacific, Canadian National Railway, Norfolk Southern",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Rental & Leasing Services",
        y: 0.6166666666666667,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "United Rentals, Air Lease",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Staffing & Employment Services",
        y: 0.038,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "ManpowerGroup",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Tools & Accessories",
        y: 0.6172602739726027,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Stanley Black & Decker",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Transportation & Logistics",
        y: 1.595,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Canadian Pacific Railway, Old Dominion Freight Line",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Trucking",
        y: 0.8965517241379309,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "C.H. Robinson Worldwide, J.B. Hunt Transport Services",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Waste Management",
        y: 0.18846153846153846,
        color: "#8B5CF6",
        sector: "Industrials",
        topAssets: "Waste Management",
        sectorWeight: 19.51451822833219
      },
      {
        name: "Closed End Fund - Other",
        y: 0.17065478230211,
        color: "#6B7280",
        sector: "Other",
        topAssets: "Various",
        sectorWeight: 0.17065478230211
      },
      {
        name: "Real Estate - Development",
        y: 0.1627906976744186,
        color: "#A16207",
        sector: "Real Estate",
        topAssets: "Brookfield Property Partners",
        sectorWeight: 1.633199154968784
      },
      {
        name: "Real Estate Services",
        y: 0.4193644067796609,
        color: "#A16207",
        sector: "Real Estate",
        topAssets: "CBRE Group (A)",
        sectorWeight: 1.633199154968784
      },
      {
        name: "REITs - Diversified",
        y: 0.6739495114006514,
        color: "#A16207",
        sector: "Real Estate",
        topAssets: "Vornado Realty Trust, W.P. Carey",
        sectorWeight: 1.633199154968784
      },
      {
        name: "REITs - Retail",
        y: 0.3769035532994922,
        color: "#A16207",
        sector: "Real Estate",
        topAssets: "Realty Income, Simon Property Group",
        sectorWeight: 1.633199154968784
      },
      {
        name: "Communication Equipment",
        y: 0.180,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Cisco Systems",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Computer Hardware",
        y: 0.396,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Apple",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Consumer Electronics",
        y: 0.09056603773584905,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Sony",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Electronic Components",
        y: 0.4161490683229814,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Texas Instruments, Taiwan Semiconductor Manufacturing",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Information Technology Services",
        y: 3.858,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Microsoft, Accenture, International Business Machines",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Scientific & Technical Instruments",
        y: 0.3566037735849057,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Thermo Fisher Scientific",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Semiconductor Equipment & Materials",
        y: 1.1509433962264151,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "ASML Holding, Applied Materials",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Semiconductors",
        y: 3.217924528301887,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "NVIDIA, Intel, Advanced Micro Devices",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Software - Application",
        y: 1.245283018867925,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Salesforce, Adobe, Oracle",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Software - Infrastructure",
        y: 1.7495283018867924,
        color: "#06B6D4",
        sector: "Technology",
        topAssets: "Microsoft, VMware (A), Red Hat",
        sectorWeight: 12.67939120316918
      },
      {
        name: "Utilities - Diversified",
        y: 1.644,
        color: "#EAB308",
        sector: "Utilities",
        topAssets: "NextEra Energy, Dominion Energy, Duke Energy",
        sectorWeight: 3.1505391821697
      },
      {
        name: "Utilities - Independent Power Producers",
        y: 1.0136986301369864,
        color: "#EAB308",
        sector: "Utilities",
        topAssets: "AES, NRG Energy",
        sectorWeight: 3.1505391821697
      },
      {
        name: "Utilities - Regulated Electric",
        y: 0.493,
        color: "#EAB308",
        sector: "Utilities",
        topAssets: "American Electric Power, Exelon",
        sectorWeight: 3.1505391821697
      }
    ];

    setData({ sectors: sectorsData, industries: industriesData });
    setLoading(false);
  }, []);

  const options = {
    chart: {
      reflow: true,
      type: "pie",
      backgroundColor: "transparent",
      width: 250,
      height: 250
    },
    title: {
      text: null
    },
    yAxis: {
      title: {
        text: null
      }
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    boost: {
      enabled: false
    },
    plotOptions: {
      series: {
        label: {
          enabled: false
        },
        turboThreshold: 0
      },
      treemap: {
        layoutAlgorithm: "squarified"
      },
      pie: {
        showInLegend: false
      }
    },
    series: [
      {
        data: data?.sectors || [],
        visible: false,
        size: "100%",
        innerSize: "99.999999%",
        name: "Sectors",
        dataLabels: {
          enabled: true,
          distance: 5
        }
      },
      {
        data: data?.industries || [],
        size: "99%",
        innerSize: "80%",
        name: "Industries",
        dataLabels: {
          enabled: false
        }
      }
    ],
    tooltip: {
      useHTML: true,
      backgroundColor: '#333',
      borderColor: '#374151',
      borderRadius: 6,
      borderWidth: 1,
      shadow: true,
      style: {
        color: '#ffffff',
        fontSize: '12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      },
      pointFormat: '<div style="padding: 10px; color: #ffffff;"><div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;"><div style="width: 8px; height: 8px; border-radius: 50%; background-color: {point.color}; flex-shrink: 0;"></div><span style="color: #9ca3af;"><b>Sector Weight:</b> {point.sectorWeight:.2f}%</span></div><hr style="margin: 8px 0; border: none; border-top: 1px solid #6b7280; opacity: 0.5;"/><b style="color: #ffffff;">{point.name}</b><br/><span style="color: #ffffff;">{point.y:.2f}%</span><br/><span style="color: #d1d5db;">{point.sector}</span><br/><span style="color: #9ca3af;"><b>Top 3:</b> {point.topAssets}</span></div>'
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
        <div>Loading portfolio data...</div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px', gap: '40px' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '250px' }}>
        {data?.sectors.map((sector, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
            <div 
              style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: sector.color,
                flexShrink: 0
              }}
            ></div>
            <span style={{ flex: 1 }}>{sector.name}</span>
            <span style={{ fontWeight: 'bold', minWidth: '40px', textAlign: 'right' }}>
              {sector.y.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
