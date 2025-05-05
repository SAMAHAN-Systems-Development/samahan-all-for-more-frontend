import { Banner } from '../ui/banner/Banner';
import ProfileCard from '../ui/ProfileCard';
import MeetTheDevelopersData from '@/data/meetTheDevelopersData.json';

export default function MeetTheDevelopersPage() {
  return (
    <main>
      <Banner
        image="/images/meet-the-developers.png"
        imageAlt="Gazette Image"
        subtitle="Meet the"
        title="DEVELOPERS"
      />

      <div className="w-full flex justify-center items-center px-4 bg-red">
        <div className="w-3/4 max-w-screen-xl">
          {/* Project Heads */}
          <div className="mt-40 text-blue">
            <div className="text-center">
              <p className=" text-bold font-bold">Project Heads</p>
              <p>Lead and managed the development of the SAMAHAN Website.</p>
            </div>
            <div className="mt-12">
              <div className="flex justify-center mb-8">
                <ProfileCard
                  key={MeetTheDevelopersData.ProjectHeads[0].fullName}
                  fileName={MeetTheDevelopersData.ProjectHeads[0].fileName}
                  fullName={MeetTheDevelopersData.ProjectHeads[0].fullName}
                  position={MeetTheDevelopersData.ProjectHeads[0].position}
                  directory="developers-cutouts"
                />
              </div>
              <div className="flex flex-wrap gap-16 items-center justify-center mt-12">
                {MeetTheDevelopersData.ProjectHeads.slice(1).map((head) => (
                  <ProfileCard
                    key={head.fullName}
                    fileName={head.fileName}
                    fullName={head.fullName}
                    position={head.position}
                    directory="developers-cutouts"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Team Heads */}
          <div className="mt-40 text-blue">
            <div className="text-center">
              <p className="text-bold font-bold">Team Heads</p>
              <p>Coordinated and supervised their respective teams.</p>
            </div>
            <div className="flex flex-wrap gap-16 items-center justify-center mt-12">
              {MeetTheDevelopersData.TeamHeads.map((head) => (
                <ProfileCard
                  key={head.fullName}
                  fileName={head.fileName}
                  fullName={head.fullName}
                  position={head.position}
                  directory="developers-cutouts"
                />
              ))}
            </div>
          </div>

          {/* UI/UX Team */}
          <div className="mt-40 text-blue">
            <div className="text-center">
              <p className="text-bold font-bold">UI/UX Team</p>
              <p>Designed the interface and user experience.</p>
            </div>
            <div className="flex flex-wrap gap-16 items-center justify-center mt-12">
              {MeetTheDevelopersData.UIUXTeam.map((member) => (
                <ProfileCard
                  key={member.fullName}
                  fileName={member.fileName}
                  fullName={member.fullName}
                  position={member.position}
                  directory="developers-cutouts"
                />
              ))}
            </div>
          </div>

          {/* Frontend Team */}
          <div className="mt-40 text-blue">
            <div className="text-center">
              <p className="text-bold font-bold">Frontend Team</p>
              <p>Built the website’s user-facing side.</p>
            </div>
            <div className="flex flex-wrap gap-16 items-center justify-center mt-12">
              {MeetTheDevelopersData.FrontendTeam.map((member) => (
                <ProfileCard
                  key={member.fullName}
                  fileName={member.fileName}
                  fullName={member.fullName}
                  position={member.position}
                  directory="developers-cutouts"
                />
              ))}
            </div>
          </div>

          {/* Backend Team */}
          <div className="mt-40 text-blue">
            <div className="text-center">
              <p className="text-bold font-bold">Backend Team</p>
              <p>Developed and managed the server-side systems.</p>
            </div>
            <div className="flex flex-wrap gap-16 items-center justify-center mt-12">
              {MeetTheDevelopersData.BackendTeam.map((member) => (
                <ProfileCard
                  key={member.fullName}
                  fileName={member.fileName}
                  fullName={member.fullName}
                  position={member.position}
                  directory="developers-cutouts"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
