import { Image } from '../../Components/Image/Image'
import OuthorImg from "../../assets/img/author_img.png"
import { Button } from '../../Components/Btn/Button'
import { Container } from '../../Components/container/Container'
import axios from 'axios'
import FormData from 'form-data'
import "./AddOuthor.scss"
import { useTranslation } from 'react-i18next';


export const AddOuthor = () => {

  const {t} = useTranslation();

  // const { token } = useContext(AuthContext);


  const handleFormSubmit = (evt)=>{
    evt.preventDefault();

    const formData = new FormData();
    const { first_name, last_name, date_of_birth, date_of_death, bio, image, country} = evt.target.elements;
    formData.append('first_name', first_name.value);
    formData.append('last_name', last_name.value);
    formData.append('date_of_birth', date_of_birth.value);
    formData.append('date_of_death', date_of_death.value);
    formData.append('bio', bio.value);
    formData.append('country', country.value);
    formData.append('image', image.files[0]);

  axios.post('https://book-service-layer.herokuapp.com/author', formData)
  .then((res)=> console.log(res))
  .then((err)=> console.log(err))

  console.log(country.value);
  console.log(image.files[0]);
  }


  return (
    <Container>
    <div  className='add-book_page'>
      <div className="add-book_page__left">
        <div className="image_preview">
        <Image className="add-book_img" src={OuthorImg} />
        </div>
        <h3 className='add-title'>Outhor Name</h3>
        <label className='add-book_img__src' htmlFor="titlle">{t("btn_rasm")}</label>
      </div>
      <div className='add-book_page_body'>
        <h1>{t("muallif_q")}</h1>
        <form onSubmit={handleFormSubmit} className='add-book_control'>
          <input name='image' className=" add-book_page_img__input" Id='titlle' type='file' />
          <input name='first_name'  className="controller__item settings-page__input" type='text' placeholder={t("ism")} />

          <input name='last_name' className="controller__item settings-page__input"  type='text' placeholder={t("familiya")} />

          <input name='date_of_birth' className="controller__item settings-page__input"  type='number' placeholder={t("tugilgan")} />

          <input name='date_of_death' className="controller__item settings-page__input"  type='number' placeholder={t("vafot_etgan")} />

          <select className='settings-page__input controller__item page__input' name="country" id="">
          <option className='select_option_item' value="1">{t("temuriylar_davri")}</option>
          <option className='select_option_item' value="2">{t("jadid_adabiyoti")}</option>
          <option className='select_option_item' value="3">{t('sovet_davri')}</option>
          <option className='select_option_item' value="4">{t("mustaqillik_davri")}</option>
        </select>

          <textarea name="bio" rows="5" cols="10" className="add-book_page__input"  type='text' placeholder={t("bio")} />

          <Button  className="add-btn">{t("yaratish")}</Button>
        </form>
      </div>
    </div>
    </Container>
  )
}
