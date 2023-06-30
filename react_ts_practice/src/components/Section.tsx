import { ReactNode } from "react";
// 定义props类型
type SectionProps = {
  title?: string,
  children: ReactNode
}
const Section = ({children,title = 'My Subheading'}: SectionProps) => {
	return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
