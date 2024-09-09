import React, { useState } from "react";
import { FIVECOUNTRIES } from "../../data";
import { SIXCOUNTRIES } from "../../data";
import { SEVENCOUNTRIES } from "../../data";
import { EIGHTCOUNTRIES } from "../../data";
import styles from "./NumbersOfWordsLength.module.css";
export function SelectCategories({
  setnumbersCategories,
  setnumbersLength,
  numbersLength,
  numbersCategories,
  toggleNumbersSelection,
  settoggleNumbersSelection,
}) {



  // console.log(numbersCategories);
  

  return (
    <>
      {toggleNumbersSelection && (
        <>
          <div className={styles.overlay} />
          <div className={styles.formContainer}>
           
              <fieldset className={styles.text_size}>
                <legend>Select Length Of Words:</legend>

              <div className={styles.flex}>
              <div className={styles.radioContainer}>
                    <input
                      type="radio"
                      name="category"
                      id="8_category"
                      value={8}
                      checked={numbersLength === 8}
                      onChange={(event) => {
                        setnumbersLength(+event.target.value);
                        setnumbersCategories(EIGHTCOUNTRIES);
                      }}
                      className={styles.radioInput}
                    />
                    <label htmlFor="8_category" className={styles.radioLabel}>
                      8 Countries.
                    </label>
                  </div>

                  <div className={styles.radioContainer}>
                    <input
                      type="radio"
                      name="category"
                      id="7_category"
                      value={7}
                      checked={numbersLength === 7}
                      onChange={(event) => {
                        setnumbersLength(+event.target.value);
                        setnumbersCategories(SEVENCOUNTRIES);
                      }}
                      className={styles.radioInput}
                    />
                    <label htmlFor="7_category" className={styles.radioLabel}>
                      7 Countries.
                    </label>
                  </div>

                  <div className={styles.radioContainer}>
                    <input
                      type="radio"
                      name="category"
                      id="6_category"
                      value={6}
                      checked={numbersLength === 6}
                      onChange={(event) => {
                        setnumbersLength(+event.target.value);
                        setnumbersCategories(SIXCOUNTRIES);
                      }}
                      className={styles.radioInput}
                    />
                    <label htmlFor="6_category" className={styles.radioLabel}>
                      6 Countries.
                    </label>
                  </div>

                  <div className={styles.radioContainer}>
                    <input
                      type="radio"
                      name="category"
                      id="5_category"
                      value={5}
                      checked={numbersLength === 5}
                      onChange={(event) => {
                        setnumbersLength(+event.target.value);
                        setnumbersCategories(FIVECOUNTRIES);
                      }}
                      className={styles.radioInput}
                    />
                    <label htmlFor="5_category" className={styles.radioLabel}>
                      5 Countries.
                    </label>
                  </div>
                </div>

                <button className={`btn_continue ${numbersLength === '' && 'disable_btn' }`} disabled={numbersLength == ''} onClick={()=>settoggleNumbersSelection(false)}>Continue</button>
              </fieldset>
           
          </div>
        </>
      )}
    </>
  );
}
