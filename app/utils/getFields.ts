import isEmpty from "lodash.isempty";
import { useCallback, useState } from "react";

import type { IFields, TField } from "@/utils/types";

const usePageFields = () => {
  const [fields, setFields] = useState<IFields>({});

  const getField = useCallback(
    (field: string): TField => {
      const [blockName, fieldName] = field.split(".");

      if (
        isEmpty(fields) ||
        blockName === undefined ||
        fieldName === undefined
      ) {
        return undefined;
      }

      return fields[blockName]?.[fieldName];
    },
    [fields],
  );

  return { getField, loaded: Object.keys(fields).length > 0, setFields };
};

export default usePageFields;
