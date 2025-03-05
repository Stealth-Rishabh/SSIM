import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, TrendingDown, Minus, Trophy, Medal } from "lucide-react";
import { timelineData } from "./dataTimeline";

export default function AccreditationsRankings() {
  const renderRankingGrid = (cards) => (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <RankingCard
            key={index}
            title={card.title}
            rankings={card.rankings}
          />
        ))}
      </div>
    </div>
  );

  const data = timelineData.map((item) => ({
    title: item.title,
    content: renderRankingGrid(item.cards),
  }));

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

const RankingCard = ({ title, description, rankings }) => {
  return (
    <Card className="w-full py-0 gap-0 max-w-full overflow-hidden border bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader className="bg-mainBlue text-white py-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 min-w-5 text-white mr-2" />
          <CardTitle className="text-xl font-bold tracking-tight">
            {title}
          </CardTitle>
        </div>
        {description && (
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <div className="flex items-center justify-between bg-muted/50 px-6 py-3 text-sm font-medium text-muted-foreground">
          <span>Year</span>
          <span>Ranking</span>
        </div>
        <Separator />

        <div className="divide-y">
          {rankings.map((item, index) => {
            // Calculate trend compared to previous year
            const prevRank =
              index < rankings.length - 1
                ? rankings[index + 1].rank
                : item.rank;
            const trend =
              item.rank < prevRank
                ? "up"
                : item.rank >= prevRank
                ? "down"
                : "same";

            // Determine if this is a top 3 ranking
            const isTopThree = item.rank <= 3;

            return (
              <div
                key={index}
                className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-muted/30 ${
                  index === 0 ? "bg-primary/5" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {index === 0 && (
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      Latest
                    </Badge>
                  )}
                  <span className="font-medium">{item.year}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant={isTopThree ? "default" : "outline"}
                    className={`px-3 py-1 text-sm font-semibold ${
                      item.rank === 1
                        ? "bg-amber-500 hover:bg-amber-500/90 text-white"
                        : item.rank === 2
                        ? "bg-zinc-400 hover:bg-zinc-400/90 text-white"
                        : item.rank === 3
                        ? "bg-amber-700 hover:bg-amber-700/90 text-white"
                        : ""
                    }`}
                  >
                    {isTopThree && <Medal className="mr-1 h-3.5 w-3.5" />}#
                    {item.rank}
                  </Badge>

                  {trend === "up" && (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  )}
                  {trend === "down" && (
                    <Minus className="h-4 w-4 text-muted-foreground" />
                  )}
                  {trend === "same" && index > 0 && (
                    <Minus className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
