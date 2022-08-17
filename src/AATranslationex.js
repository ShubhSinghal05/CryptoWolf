import React from "react";
import { useTranslation } from "react-i18next";
import "./Translation/i18n";

export const AATranslationex = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>
        {t("welcome")}
      </p>
    </div>
  );
};