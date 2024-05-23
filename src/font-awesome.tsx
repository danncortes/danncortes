import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPrint,
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone,
  faRing,
  faGlobeAmericas,
  faIdCard
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faEnvelope,
  faMap,
  faMapMarkerAlt,
  faPhone,
  faRing,
  faGlobeAmericas,
  faIdCard,
  faPrint
);

export { FontAwesomeIcon };
