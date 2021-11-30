import classNames from 'classnames';
import * as React from 'react';

import { ComponentClassNames } from '../shared/constants';
import { Primitive, TableRowProps } from '../types';
import { View } from '../View';

const TableRowPrimitive: Primitive<TableRowProps, 'tr'> = (
  { children, className, ...rest },
  ref
) => (
  <View
    as="tr"
    className={classNames(ComponentClassNames.TableRow, className)}
    ref={ref}
    {...rest}
  >
    {children}
  </View>
);

export const TableRow = React.forwardRef(TableRowPrimitive);

TableRow.displayName = 'TableRow';
