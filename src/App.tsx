import React, { useEffect } from "react";
import { getCompanyDataFromUrl } from "./utils/urlDecoder";
import Navbar from "./components/Navbar";
import CompanyHeader from "./components/CompanyHeader";
import CompanyMission from "./components/CompanyMission";
import TeamSection from "./components/TeamSection";
import NavigationSidebar from "./components/NavigationSidebar";
import CompanyMap from "./components/CompanyMap";
import InsightsSection from "./components/InsightsSection";
import OurTakeSection from "./components/OurTakeSection";
import BenefitsSection from "./components/BenefitsSection";
import FundingSection from "./components/FundingSection";
import LeadershipSection from "./components/LeadershipSection";
import DiversitySection from "./components/DiversitySection";
import JobsSection from "./components/JobsSection";
import ArticlesSection from "./components/ArticlesSection";
import GallerySection from "./components/GallerySection";
import PeopleBreakdown from "./components/PeopleBreakdown";

const App: React.FC = () => {
  const companyData = getCompanyDataFromUrl();

    // Debug logging - remove after fixing issues
    console.log("Company data loaded:", companyData);

  useEffect(() => {
    document.title = `${companyData.name} | Company Profile`;
  }, [companyData.name]);

  const navigationSections = [
    { id: "company-mission", name: "Company mission" },
    { id: "meet-the-team", name: "Meet the team", isNew: true },
    { id: "insights", name: "Insights" },
    { id: "our-take", name: "Our take" },
    { id: "benefits", name: "Benefits" },
    { id: "funding", name: "Funding" },
    { id: "leadership", name: "Leadership and people" },
    { id: "diversity", name: "Diversity, equity and inclusion" },
    { id: "office", name: "Office" },
    { id: "articles", name: "Articles" },
    { id: "jobs", name: "Jobs" },
    { id: "gallery", name: "Gallery" },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F7]">
      <Navbar logoUrl="/logo.svg" />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="grid grid-cols-6 grid-rows-2 gap-3 mb-8">
          <section
            id="company-header"
            className="bg-white p-6 rounded-lg shadow-sm col-span-3 row-span-2"
          >
            <CompanyHeader company={companyData} />
          </section>

          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={companyData.photos[0]}
              alt="Company photo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative rounded-lg overflow-hidden row-span-2">
            <img
              src={companyData.photos[1]}
              alt="Company photo"
              className="h-full w-full object-cover"
            />
          </div>

          <section
            id="company-logo"
            className="grid bg-white p-4 rounded-lg shadow-sm place-items-center"
          >
            <img src={companyData.logoUrl} alt={`Company logo`} />
          </section>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={companyData.photos[2]}
              alt="Company photo"
              className="h-full w-full object-cover"
            />
          </div>
          <CompanyMap
            position={[
              companyData.mapLocation.lat,
              companyData.mapLocation.lng,
            ]}
            address={companyData.mapLocation.address}
          />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section
              id="company-mission"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <CompanyMission mission={companyData.mission} />
            </section>

            <section
              id="meet-the-team"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <TeamSection
                departments={companyData.team.departments}
                totalPeople={companyData.team.totalPeople}
                members={companyData.team.members}
              />
            </section>

            <section
              id="insights"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <InsightsSection insights={companyData.insights} />
            </section>

            <section
              id="our-take"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <OurTakeSection ourTake={companyData.ourTake} />
            </section>

            <section
              id="benefits"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <BenefitsSection benefits={companyData.benefits} />
            </section>

            <section
              id="funding"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <FundingSection funding={companyData.funding} />
            </section>

            <section
              id="leadership"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <LeadershipSection leadership={companyData.leadership} />
            </section>

            <section
              id="diversity"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <PeopleBreakdown breakdown={companyData.breakdown} />
            </section>

            <section
              id="diversity"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <DiversitySection dei={companyData.dei} />
            </section>

            {companyData.articles && (
              <section
                id="articles"
                className="bg-white p-6 rounded-lg shadow-sm mb-8"
              >
                <ArticlesSection articles={companyData.articles} />
              </section>
            )}

            <section
              id="jobs"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <JobsSection jobs={companyData.jobs} />
            </section>

            <section
              id="gallery"
              className="bg-white p-6 rounded-lg shadow-sm mb-8"
            >
              <GallerySection photos={companyData.photos} />
            </section>
          </div>

          <div className="lg:col-span-1">
            <NavigationSidebar sections={navigationSections} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
