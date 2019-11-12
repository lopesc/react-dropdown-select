import React from 'react';

export interface IState {
  dropdown: boolean;
  values: object;
  search: string;
  selectBounds: object;
  cursor: object;
}

export interface IMethods {
  removeItem: () => void;
  dropDown: () => void;
  addItem: (item: IItemRenderer['item']) => void;
  setSearch: () => void;
  getInputSize: () => void;
  toggleSelectAll: () => void;
  clearAll: () => void;
  selectAll: () => void;
  searchResults: () => void;
  getSelectRef: () => void;
  isSelected: () => void;
  getSelectBounds: () => void;
  areAllSelected: () => void;
  handleKeyDown: () => void;
  activeCursorItem: () => void;
  createNew: () => void;
  sortBy: () => void;
  safeString: () => void;
}

export interface IRenderer {
  props?: ISelectProps;
  state?: IState;
  methods?: IMethods;
}

export interface IKeyDown {
	event: Event;
	props?: ISelectProps;
	state?: IState;
	methods?: IMethods;
	setState?: () => void;
}

export interface IItemRenderer<T> {
  item?: T;
  itemIndex?: number;
  props?: ISelectProps;
  state?: IState;
  methods?: IMethods;
}

export interface ISelectProps {
	className?: string;
  addPlaceholder?: string;
  placeholder?: string;
  values: object[];
  options: object[];
  multi?: boolean;
  disabled?: boolean;
  searchBy?: string;
  sortBy?: string;
  clearable?: boolean;
  searchable?: boolean;
  dropdownHandle?: boolean;
  separator?: boolean;
  keepOpen?: undefined;
  noDataLabel?: string;
  createNewLabel?: string;
  disabledLabel?: string;
  dropdownGap?: number;
  closeOnScroll?: boolean;
  debounceDelay?: number;
  labelField?: string;
  valueField?: string;
  color?: string;
  keepSelectedInList?: boolean;
  closeOnSelect?: boolean;
  clearOnBlur?: boolean;
  clearOnSelect?: boolean;
  dropdownPosition?: string;
  dropdownHeight?: string;
  autoFocus?: boolean;
  portal?: string;
  create?: boolean;
  direction?: 'ltr' | 'rtl';
  name?: string;
  onChange: (value: any) => void;
  onDropdownOpen?: () => void;
  onDropdownClose?: () => void;
  onClearAll?: () => void;
  onSelectAll?: () => void;
  onCreateNew?: () => void;
	searchFn?: ({ props, state, methods }: IRenderer) => object[];
	handleKeyDownFn?: ({ event, props, state, methods, setState }: IKeyDown) => void;
  clearRenderer?: ({ props, state, methods }: IRenderer) => void;
  contentRenderer?: ({ props, state, methods }: IRenderer) => void;
  dropdownRenderer?: ({ props, state, methods }: IRenderer) => void;
  dropdownHandleRenderer?: ({ props, state, methods }: IRenderer) => void;
  inputRenderer?: ({ props, state, methods }: IRenderer) => void;
  itemRenderer?: ({ item, itemIndex, props, state, methods }: IItemRenderer) => void;
  loadingRenderer?: ({ props }: IItemRenderer) => void;
  noDataRenderer?: ({ props, state, methods }: IRenderer) => void;
  optionRenderer?: ({ item, props, state, methods }: IItemRenderer) => void;
  separatorRenderer?: ({ props, state, methods }: IRenderer) => void;
	additionalProps?: object;
}

declare const Select: React.SFC<ISelectProps>;

export default Select;
