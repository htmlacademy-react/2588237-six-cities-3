import { cities } from '../../../../const';
import { CityFilter } from './types';

type CityFiltersProps = {
  currentCity: CityFilter;
}

function CityFilters({currentCity}: CityFiltersProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}>
              <span>{city}</span>
            </a>
          </li>
        ))}

      </ul>
    </section>
  );
}

export default CityFilters;
