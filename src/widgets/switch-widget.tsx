import React from 'react';
import { Switch } from 'antd';
import classNames from 'classnames';

export const SwitchWidget: React.FunctionComponent<any> = ({
  value,
  disabled,
  readonly,
  onChange,
  options,
  ...props
}) => {
  const { checkedChildren = 'On', unCheckedChildren = 'Off' } = options;
  const className = classNames('checkbox', {
    disabled: disabled || readonly,
  });

  return (
    <div className={className}>
      <Switch
        onChange={() => onChange(!value)}
        checked={typeof value === 'undefined' ? false : value}
        disabled={disabled || readonly}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
      />
    </div>
  );
};

