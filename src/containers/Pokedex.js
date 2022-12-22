import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT_CARDS_URL } from "../constants";
import { ContainerStyle, ListStyle, CardStyle } from "./Pokedex.styled";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCard = async () => {
      const response = await axios(ENDPOINT_CARDS_URL);

      const prepareData = response.data?.data.map((item) => {
        const hp = (item.hp > 100 && 100) || parseInt(item.hp) || 0;
        const damage =
          item.attacks
            ?.map((item) => parseInt(item.damage) || 0)
            .reduce((a, b) => a + b) || 0;

        const weaknesses =
          (item.weaknesses?.length * 100 > 100 && 100) ||
          item.weaknesses?.length * 100 ||
          0;

        return {
          ...item,
          hp,
          strange:
            (item.attacks?.length * 50 > 100 && 100) ||
            item.attacks?.length * 50 ||
            0,
          weaknesses,
          damage,
          happiness: Math.round(
            (hp / 10 + damage / 10 + 10 - weaknesses / 100) / 5
          ),
        };
      });

      setPokemons(prepareData);
    };

    getCard();
  }, []);

  return (
    <ContainerStyle>
      <h1>My Pokedex</h1>
      <ListStyle>
        {pokemons.map((item) => (
          <CardStyle
            className="card"
            key={item.id}
            card={item.imageUrl}
            type={item.type}
          >
            <div className="blur" />
            <img src={item.imageUrl} alt={item.name} />
            <div className="title">{item.name}</div>
            <div className="detail">
              <div className="state">
                <img
                  alt="icon"
                  src="data:image/png;base64,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"
                />
                <img
                  alt="icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETUlEQVR4nO2X2W7aaBTH8wYzj5ClIZClgbCvBgNm88ISQiD3nUfgqhqmfZJWvZlR36G9qTKvMKNezEg1ZrexkdqqEmdkjM0S20CBlJH8l84VkvU7Px9/32Fvz4gRI0aMbDsCcftUICsvBKp8LxBlWiDKX3m8RAv47QcBv3kxSBetqz6TjZI2FqVesijxgQ0TdC+Mf2URnGZDmXsWyfzWC6Uu1gbnsqWjAVl5K1CV4YCqwIAsg0CIdQsCXpIqcwN8+gb6qeI7PllEFoKjZIRDyfccSgGHksBGSGDDBLBhHFgEh14oM6puMD3sBVJ/sMH4wXfBD7J32IAsszK4BC+Cj+EzE3g+VQQ+dQ395PWQwwqve7HiTw/AEepnFqXezIBHRHBiBK7AB9NSBVLQ9Seh4030On4svjK8QFW+qVqfBk+L4EXgk9ej6icK0E/kgcPyf/GxrEV+Ho+SpyxK/T2BJ1St98bgMnzXl4CuNwEdN/at416yCWlsyqy+9TF4ahq8AH0sL1U8B1wsy3PxLMbFqASHUry69Yyq9a5Phseg44lDxx2HtjPaZd3I/mL7ZOXtytanwMfwwEWzwEapzyxKfZ4BX9J61yPDx6DjikHHGYW2Hf19idOmPJy3PgOuZj2uWB/Di6OiNes61r2z1kfgrqhoH9oOFFr2yLDrQM51Gii9XGy9oGtdgp8D17Lun7aOSdbdc9YdKLTtEamuwtC0ITXtBvDSn9NH41rWw2tYd06sy+Atm1gItC6D95oN8JkSM3s0alvnYgusI5uz3hLBrSJ8CJpPg7RmA/30zRd967klrOMLrCd0rKPq1q0h0bwID80L/xftN5As/iuD61unVrLenbPembEenR2XGesiuAwfgOZFAJrn/n90Gii81rWujIv+GrB56wHRvAgPzKnvlfZHnMqh61nXu5Aw1aOxPQKPQGvO+gh8Yh2aZz5onHqBOfWie3rhsPx7fesbuJAc89YR6SOdty6Cn/ugMYZvWDzvdOFHY4TlzVw0N1h8IakvX5ux7h/BK+BimT0D2uQ1L2xg9Baiubsdsg4NswfoE8/dUvBKExHi+TrLl7r18GrWLR5gzG6om5zPV4JXmggT1e1aD+hYd4/hXb9+F7zSRChT3dgaMG196mhsKOAT68yJa314Od1AprqJNeCB9TMV6ycyvGMz8JMmklV966tdSDPglol1xuSC+pMNwytNeLHqNq0zJuf24OW03bHqNqwzx48ArzThRKsrLF9j615N68yx4/HglSbskZpi3apl3adjXQR3Qn0Ef/W48HLEv3day9f8haRYN81Yh/rhD4JXmrgM1hatAQ+si+BP7D8eXk7zwl/TWgOUj1Q8YWTrRzsEL4c589aWsn50tXvwchiLu7bAOnw6tO4mvBzmxFnTsA6f9nccXg59bK9J4JJ1+sD2/4GXUz+0/UIf2D7S+9aP9f3LZ8oPRowYMWJkb4fyHzWnHNc2USodAAAAAElFTkSuQmCC"
                />
                <img
                  alt="icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAElEQVR4nO2YPUsdQRSGRyy0UwjY2YioiImGgGJxUUT8YM9oAvFHpAtJYSMIdoofv8Amglevovh15gYRIV2KkDqIjUJiQGLv1ys7orju3Aua3bs7MA9MMxdm3+ecs1x2hHA4HA6HwxEE+12VYDkDJf+A6TeYpsEDFcIWoGgOSuLRmhVpA7mRcjBNQtGZrnRefgZEGZj+hgSYTlLXGTCNhytNn7DT97j6d7+lqzPwqxgOdIz1TrNAgc6IxASMVZZArsW8v1WgM/sJjVZBgWwDjGO01p6u0UIxAdMYLTUB7IX3N3vOEhmtogKmMfL3NzLh/ZVW4znJCfiBTKF8gZWX5v2t3hQJPEus1QKBJ4qJ2IJnM7XItR1GJqDMK57wax0fsNx8odtumwBYfkTu1bUOb5sAWI7qgze7YZ0A2Ht/fzATsNRsm4D8ETjc/5e1SkDJf4HDdwaBbKNFAiy/hR6w+sYiAeX1hx6w3WuPgA+YFuMOjIeL6VRECdaHq8F0VEKJn5EKaAnlZaDoqjQdkFORC2gJ/3Mv/vDX4KHX8Qj41ybmT8AIFy3EEj4gwjQR08t7gN23L2IX0BJ5SfrCKjqBX8jL+pKEv5f4+q4GLL9A0eV/jMwlFM1jd6SqpOEDItteHRSNQdGevsBiOi/+ktIJWH6/HcWhxsSCOxwOh8MhEuQGNgU61qWWlEoAAAAASUVORK5CYII="
                />
                <img
                  alt="icon"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpElEQVR4nO1XbWhbVRi+ILT3NirYbD/UDkQElW0qw7XIwvTPcMp6T5ISO8HCHBj6b6jIYKDDptBWZ2vXzVrX9l6nMEyLq8MFQWdHMnPOjd2sTWapcwy0H+4ruav+2EB95ZykadotHzfJkrvtPHB+nLTc5Hne93ne9woCBwcHBwcHBwcHBwdHHtCJCoUc4VaHzgVQeQfo3AIqzwCdh6DKp4DOx6DK9wD9ll+ErBt+EKy2QNr7bb8IrbABO+nuy2CU8Ozxfnh6gzP+zExneRGy/X8uzzGDAC9v3Z7rD/cvCmALFCCA3zQC7G/dxZ5Vef9GGOp6Cya8LXeOBcgXXSA9+Bx7lueNZggPeeCi/4AJBbDaAte1X4Y2ytX3j63bwsi/+IKLVX7m2P7cQzBTBmTLCsMZYBBGfP/Q6ucBH3wHzh79wNgUyJQB2bLCcAYYhFHfTx5ugxhW7ow9gKTxvbn3AGvxMmDNepmRR/WNS3xvWICS7gFZELSgtURE3VhEESyhv7XqBjj1eBNMvfImXDi0dwm5OpsTnqjdAtrnu+Gsr/OGIs2M9VVl+87S7gFp4BM2VxJR/ghL8r9EQnCjo1nsMPnSDogFBpMEp77qgKmRDogFF32femJ40CmYHT5hcyWW0PcJoldZB0hy3biwyTLx2W4Yb9sJY/WvAbnHzoQ4VbsNov6BnPaDGFH/vIIP1glmBhZRLyMvomlS5Xgy9W+0svSc9/fBmV4PaA+4mAg/2ZuXpH1GEbDyn45Vrx4aeFgwG4IWtDbR9lcXyIdEtIqI8jCR0HzI2gCRTc1wwbuPkZlW3o93gsUOZz7xGHpPiGHlmk7Uvnn/wErBLCAi+jBR/e4U8peX+z+0ogHmvuxhRH5p3ME+G7O74WJg6djL7ShRHas7YVQRy81fwBI6TckEJXttXBBWeSCifJRIjpqfP34bfqxrihN+9lW4fGIA5gY746H4SCOc+6YrDwESByt/6ER1g9d7V9kEIJL8FyUzKrjujt/RfLzqjhp6v3SiH86P9MQJVzvht6/3QHS0P3mfHGnPX4CkNdTTuqa4yiQAms8kAP2Bl470xq1Q7YTwcCtEjx1ICkC3v0IFSLHGt7Hg4LqyWABLMhtVWJQPJyzgo3lAyUc2uhMW2AaRYQ/MDSxagApSPAHKMDFIMgTlvfQeqpAfJSKKXrcErWwAmgfUAlNbX0+GYDEsUNaJEbI41hBJ/oeOQa0KPcU+E9EqLCEvltAV2ua08pR8ZLgVZtU9oN3rYFvheNeuwkLQwMT4PeiVbpoIWET7FhahBREWQEnTNqeVp+THahpZ9U8iN4S9LXmOQZNNjIjgqsCS/F0iC65hEfVoov0ZGow08annadvTyrPWX98EE4fehXNpXoBurhDqeJR8ioreEREqgoh6EnZI+zJEK0/J/3rkvZxX4RKcGZ0o7RDxVhQshGapX41F1IlFOUx3BO0+B0v7kw438zxte1p5E5FPzYt2odgIe1sgPNTK0p4GXsk8n8eJYXWu6ALEsDJbbmIGOmC66ALoWO0oP7EcO4CobUUXAHzdlQkRZspNsCQhyMHBwcHBwcHBwcEh3A74H9FIL7Af02JmAAAAAElFTkSuQmCC"
                />
                <img
                  alt="icon"
                  src="data:image/png;base64,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"
                />
              </div>
              <div className="meter">
                <div>{item.damage}</div>
                <meter value={item.hp} min="0" max="100" />
                <meter value={item.strange} min="0" max="100" />
                <meter value={item.weaknesses} min="0" max="100" />
                <meter value={item.happiness} min="0" max="10" />
              </div>
            </div>
          </CardStyle>
        ))}
      </ListStyle>
    </ContainerStyle>
  );
}

export default Pokedex;
