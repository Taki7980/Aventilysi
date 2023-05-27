'use client';
interface HeadingProps {
      title: string;
      subtitle?: string;
      center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
      return (
            <div className="mt-6">
                  <div className={center ? 'text-center' : 'text-start'}>
                        <div className="text-3xl font-bold">
                              {title}
                        </div>
                        <div className="font-light text-neutral-950 mt-2">
                              {subtitle}
                        </div>

                  </div>
            </div>
      )
}

export default Heading