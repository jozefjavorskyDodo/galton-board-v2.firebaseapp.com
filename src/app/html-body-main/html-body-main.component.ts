import { Component } from "@angular/core";

@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})

export class HtmlBodyMainComponent {

  start_func(): void {

    try {
      <string>"use strict";

      let correct_output_flagie: boolean = <boolean>false;
      let start_bttn: any = document.querySelector(String("#start-bttn"));
      let annul_ui_state_bttn: any = document.querySelector(String("#annul-ui-state-bttn"));
      let aaa_G = setTimeout(() => {

        let f_v: number = Number(Math.floor(Math.random() * <number>2));
        let w_c: any = document.querySelector(String("#_") + String(f_v));

        w_c.innerHTML = String('⏬');

      }, <number>100);
      let bbb_G = setTimeout(() => {

        let f_v: any = document.querySelector(String("#_0"));
        let s_v: any = document.querySelector(String("#_1"));

        if (
          String(f_v.innerHTML) === <string>'⏬'
        ) {

          let i_arr: string[] = [String("#_2"), String("#_3")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          f_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else {

          let i_arr: string[] = [String("#_3"), String("#_4")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          s_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        };
      }, <number>200);
      let ccc_G = setTimeout(() => {

        let f_v: any = document.querySelector(String("#_2"));
        let s_v: any = document.querySelector(String("#_3"));
        let t_v: any = document.querySelector(String("#_4"));

        if (
          String(f_v.innerHTML) === <string>'⏬'
        ) {

          let i_arr: string[] = [String("#_5"), String("#_6")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          f_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(s_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_6"), String("#_7")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          s_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else {

          let i_arr: string[] = [String("#_7"), String("#_8")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          t_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        };
      }, <number>300);
      let ddd_G = setTimeout(() => {

        let fr_v: any = document.querySelector(String("#_5"));
        let s_v: any = document.querySelector(String("#_6"));
        let t_v: any = document.querySelector(String("#_7"));
        let fo_v: any = document.querySelector(String("#_8"));

        if (
          String(fr_v.innerHTML) === <string>'⏬'
        ) {

          let i_arr: string[] = [String("#_9"), String("#_10")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fr_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(s_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_10"), String("#_11")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          s_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(t_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_11"), String("#_12")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          t_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else {

          let i_arr: string[] = [String("#_12"), String("#_13")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fo_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        };
      }, <number>400);
      let eee_G = setTimeout(() => {

        let fr_v: any = document.querySelector(String("#_9"));
        let s_v: any = document.querySelector(String("#_10"));
        let t_v: any = document.querySelector(String("#_11"));
        let fo_v: any = document.querySelector(String("#_12"));
        let fi_v: any = document.querySelector(String("#_13"))

        if (
          String(fr_v.innerHTML) === <string>'⏬'
        ) {

          let i_arr: string[] = [String("#_14"), String("#_15")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fr_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(s_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_15"), String("#_16")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          s_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(t_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_16"), String("#_17")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          t_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else if (String(fo_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_17"), String("#_18")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fo_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else {

          let i_arr: string[] = [String("#_18"), String("#_19")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fi_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        };
      }, <number>500);
      let fff_G = setTimeout(() => {

        let fr_v: any = document.querySelector(String("#_14"));
        let s_v: any = document.querySelector(String("#_15"));
        let t_v: any = document.querySelector(String("#_16"));
        let fo_v: any = document.querySelector(String("#_17"));
        let fi_v: any = document.querySelector(String("#_18"))
        let si_v: any = document.querySelector(String("#_19"))

        if (
          String(fr_v.innerHTML) === <string>'⏬'
        ) {

          let i_arr: string[] = [String("#_20"), String("#_21")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fr_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(s_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_21"), String("#_22")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          s_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(t_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_22"), String("#_23")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          t_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else if (String(fo_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_23"), String("#_24")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fo_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else if (String(fi_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_24"), String("#_25")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fi_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else {

          let i_arr: string[] = [String("#_25"), String("#_26")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          si_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        };
      }, <number>600);
      let ggg_G = setTimeout(() => {

        let fr_v: any = document.querySelector(String("#_20"));
        let s_v: any = document.querySelector(String("#_21"));
        let t_v: any = document.querySelector(String("#_22"));
        let fo_v: any = document.querySelector(String("#_23"));
        let fi_v: any = document.querySelector(String("#_24"))
        let si_v: any = document.querySelector(String("#_25"))
        let se_v: any = document.querySelector(String("#_26"))

        if (
          String(fr_v.innerHTML) === <string>'⏬'
        ) {

          let i_arr: string[] = [String("#_27"), String("#_28")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fr_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(s_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_28"), String("#_29")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          s_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';

        } else if (String(t_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_29"), String("#_30")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          t_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else if (String(fo_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_30"), String("#_31")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fo_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else if (String(fi_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_31"), String("#_32")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          fi_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else if (String(si_v.innerHTML) === <string>'⏬') {

          let i_arr: string[] = [String("#_32"), String("#_33")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          si_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        }
        else {

          let i_arr: string[] = [String("#_33"), String("#_34")];
          let i_: number = Number(Math.floor(Math.random() * <number>2));
          let ele: any = document.querySelector(String(i_arr[i_]));

          se_v.innerHTML = <string>'⬛';
          ele.innerHTML = <string>'⏬';
        };
      }, <number>700);
      let hhh_G = setTimeout(() => {
        for (let i_i: number = <number>27; i_i <= Number(34); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('⏬')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            elem.innerHTML = String('⬛');
            elem2.innerHTML = String('🏀');
          };
        };
      }, <number>800);
      let iii_G = setTimeout(() => {
        for (let i_i: number = <number>35; i_i <= Number(42); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>900);
      let jjj_G = setTimeout(() => {
        for (let i_i: number = <number>43; i_i <= Number(50); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1000);
      let kkk_G = setTimeout(() => {
        for (let i_i: number = <number>51; i_i <= Number(58); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1100);
      let lll_G = setTimeout(() => {
        for (let i_i: number = <number>59; i_i <= Number(66); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1200);
      let mmm_G = setTimeout(() => {
        for (let i_i: number = <number>67; i_i <= Number(74); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1300);
      let nnn_G = setTimeout(() => {
        for (let i_i: number = <number>75; i_i <= Number(82); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1400);
      let ooo_G = setTimeout(() => {
        for (let i_i: number = <number>83; i_i <= Number(90); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1500);
      let ppp_G = setTimeout(() => {
        for (let i_i: number = <number>91; i_i <= Number(98); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1600);
      let rrr_G = setTimeout(() => {
        for (let i_i: number = <number>99; i_i <= Number(106); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1700);
      let sss_G = setTimeout(() => {
        for (let i_i: number = <number>107; i_i <= Number(114); i_i++) {

          let elem: any = document.querySelector(String("#_") + String(i_i));

          if (String(elem.innerHTML) === String('🏀')) {

            let elem2: any = document.querySelector(String("#_") + String(i_i + <number>8));

            if (String(elem2.innerHTML) === <string>'🏀') {
              elem.innerHTML = String('🏀');
              elem2.innerHTML = String('🏀');
            } else {
              elem.innerHTML = String('⬛');
              elem2.innerHTML = String('🏀');
            };

          };
        };
      }, <number>1800);
      let curvature_flag = setTimeout(() => {

        for (let i_i_i: number = <number>35; i_i_i <= Number(42); i_i_i++) {

          let el_: any = document.querySelector(String("#_") + String(i_i_i));

          if (String(el_.innerHTML) === String('🏀')) correct_output_flagie = <boolean>true;

        };

      }, <number>1900);
      let output_validation = setTimeout(() => {

        if (Boolean(correct_output_flagie) === <boolean>false) { this.start_func(); } else {

          annul_ui_state_bttn.style.visibility = <string>"visible";

        };

      }, <number>2000);

      start_bttn.style.visibility = <string>"hidden";

    }
    catch (err_1) {

      console.clear();
      alert(String("bug"));
      console.log(err_1);

    }
    finally { };

  }

  annul_ui_state_func(): void {
    try {
      <string>"use strict";

      let start_bttn: any = document.querySelector(String("#start-bttn"));
      let annul_ui_state_bttn: any = document.querySelector(String("#annul-ui-state-bttn"));
      let __tds: any = document.querySelectorAll(String("td"));

      start_bttn.style.visibility = <string>"visible";
      annul_ui_state_bttn.style.visibility = <string>"hidden";
      [...__tds].forEach((cubicle) => {
        if (String(cubicle.innerHTML) === String('🏀')) {
          cubicle.innerHTML = <string>'⬛';
        };
      });

    }
    catch (err_2) {

      if (err_2) {
        console.clear();
        alert(String("bug"));
        console.log(err_2);
      };

    }
    finally { };

  };

}