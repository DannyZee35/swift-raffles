import CreationSettingsWrapper from "./CreationSettingsWrapper";
import DiscordBotSettings from "./views/DiscordBotSettings";
import RaffleInfoSettings from "./views/RaffleInfoSettings";
import SetupRequirementSettings from "./views/SetupRequirementSettings";
import WinnerInfoSettings from "./views/WinnerInfoSettings";

export default function RaffleSettingsViews({ current }: { current?: string }) {
  if (current === "Raffle Info") {
    return (
      <CreationSettingsWrapper
      
        title="Create new Raffle"
        subtitle="Enter required information"
      >
        <RaffleInfoSettings />
        
      </CreationSettingsWrapper>
    );
  }

  if (current === "Discord Bot") {
    return (
      <CreationSettingsWrapper
        title="Discord Bot"
        subtitle="Manage Swift discord bot"
      >
        <DiscordBotSettings />
      </CreationSettingsWrapper>
    );
  }

  if (current === "Winner Info") {
    return (
      <CreationSettingsWrapper
        title="Winner Info"
        subtitle="Manage winner information"
      >
        <WinnerInfoSettings />
      </CreationSettingsWrapper>
    );
  }

  if (current === "Setup Requirements") {
    return (
      <CreationSettingsWrapper
        title="Setup Requirements"
        subtitle="Manage setup requirements"
      >
        <SetupRequirementSettings />
      </CreationSettingsWrapper>
    );
  }

  if (current === "Setup Questions") {
    return (
      <CreationSettingsWrapper
        title="Setup Questions"
        subtitle="Manage setup questions"
      >
        <RaffleInfoSettings />
      </CreationSettingsWrapper>
    );
  }

  return <div>Not Found</div>;
}
