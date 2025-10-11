import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ items = [] }) => {
  const defaultItems = [
    { name: 'Home', href: '/', current: false },
    { name: 'Portfolio', href: '/#about', current: false },
    { name: 'Skills', href: '/#skill', current: false },
    { name: 'Contact', href: '/#Contect', current: true }
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://kabawat.vercel.app${item.href}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbItems.map((item, index) => (
            <li 
              key={index}
              className={`breadcrumb-item ${item.current ? 'active' : ''}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.current ? (
                <span itemProp="name" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href} itemProp="item">
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={index + 1} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
