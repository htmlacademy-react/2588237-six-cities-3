import { FormEvent } from 'react';
import { cities } from '../../../../const';
import { useAppDispatch } from '../../../../hooks/store';
import { changeCity, updateOffers } from '../../../../store/action';

type CityFiltersProps = {
  currentCity: string;
}

function CityFilters({currentCity}: CityFiltersProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityFilterClick = (evt: FormEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const target = evt.currentTarget;
    const city = target.dataset.city;

    if (city === currentCity || !city) {
      return;
    }

    dispatch(changeCity(city));
    dispatch(updateOffers(city));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" >
        {cities.map((city) => (

          <li className="locations__item" key={city} >
            <a
              className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
              data-city={city}
              onClick={handleCityFilterClick}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}

      </ul>
    </section>
  );
}

export default CityFilters;
