export interface CardProps {
  title: string;
  url: string;
}

export interface AnimatedCardProps extends CardProps {
  index: number;
}
