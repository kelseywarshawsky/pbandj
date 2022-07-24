import React from "react";
import Image from "next/image";
import chong from "../assests/chong.png";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Grid, useTheme } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ themeColor, setThemeColor }) => {
  const theme = useTheme();
  const style = {
    wrapper: `w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] font-semibold text-2xl`,
    imgWrap: `rounded-full border overflow-hidden`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `px-4 font-bold cursor-pointer`,
    headerIcon: `text-3xl font-black px-4 hover:text-white cursor-pointer`,
  };
  return (
    <div
      className={style.wrapper}
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Grid
        container
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={"auto"}
          container
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Grid item>
            <Link href="/">
              <div className={style.logoContainer}>
                <div className={style.imgWrap}>
                  <Image src={chong} height={40} width={40} />
                </div>
                <div
                  className={style.logoText}
                  style={{
                    color: theme.palette.text.primary,
                  }}
                >
                  PB and J{" "}
                </div>
              </div>
            </Link>
          </Grid>
          <Grid item>
            <ThemeSwitcher
              themeColor={themeColor}
              setThemeColor={setThemeColor}
            />
          </Grid>
        </Grid>
        <Grid item>
          <div className={style.headerItems}>
            <Link href="/collections/0x74804f316B8CCCB7cfff8927EFb127DDCDB3E660">
              <div
                className={style.headerItem}
                style={{
                  color: theme.palette.text.secondary,
                }}
              >
                Collections
              </div>
            </Link>
            <div
              className={style.headerItem}
              style={{
                color: theme.palette.text.secondary,
              }}
            >
              Stats
            </div>
            <div
              className={style.headerItem}
              style={{
                color: theme.palette.text.secondary,
              }}
            >
              Reasources
            </div>
            <div
              className={style.headerItem}
              style={{
                color: theme.palette.text.secondary,
              }}
            >
              Create
            </div>
            <div
              className={style.headerIcon}
              style={{
                color: theme.palette.text.secondary,
              }}
            >
              <CgProfile />
            </div>
            <div
              className={style.headerIcon}
              style={{
                color: theme.palette.text.secondary,
              }}
            >
              <MdOutlineAccountBalanceWallet />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
