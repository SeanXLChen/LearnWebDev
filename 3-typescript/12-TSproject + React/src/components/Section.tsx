import React from 'react';

type SectionProps = { 
    title?: string, 
    children: React.ReactNode 
}

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}