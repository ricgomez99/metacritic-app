export interface CardProps {
  title: string;
  url: string;
  score: number;
  slug: string;
}

export interface AnimatedCardProps extends CardProps {
  index: number;
}

export interface ScoreProps {
  score: number;
  maxScore: number;
}
