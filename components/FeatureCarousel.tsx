type Feature = {
  title: string;
  text: string;
  badge?: string;
};

export function FeatureCarousel({ features }: { features: Feature[] }) {
  const items = [...features, ...features];

  return (
    <div aria-label="Funcionalidades de Smartock" className="featureCarousel">
      <div aria-hidden="true" className="featureCarouselFade featureCarouselFadeLeft" />
      <div aria-hidden="true" className="featureCarouselFade featureCarouselFadeRight" />
      <div className="featureCarouselTrack">
        <ul className="featureCarouselList">
          {items.map((feature, index) => (
            <li className="featureCarouselCard" key={`${feature.title}-${index}`}>
              {feature.badge ? <span className="featureCarouselBadge">{feature.badge}</span> : null}
              <span className="featureCarouselIcon" aria-hidden="true">
                {String((index % features.length) + 1).padStart(2, "0")}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <span className="featureCarouselLink">
                Ver detalles
                <span aria-hidden="true">+</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
