"use client";

export const TechIcon = ({ component }: { component: React.ElementType }) => {
  if (!component) return null;
  const Component = component;
  return <Component className="size-10" />;
};
