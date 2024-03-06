import React, {PropsWithChildren} from 'react';

export  default function  ExampleLayout ({ children }: PropsWithChildren) {
    return (
        <section className="min-w-full">
            {children}
        </section>
    );
};

