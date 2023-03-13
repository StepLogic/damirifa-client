/**
 * Project: damirifa
 * File: index
 * Created by Pennycodes on 4/13/2022.
 * Copyright damirifa
 */

import * as authActions from './authActions';
import * as commonActions from './commonActions';

const ActionCreators = Object.assign(
    {},
    authActions,
    commonActions
);

export default ActionCreators;
