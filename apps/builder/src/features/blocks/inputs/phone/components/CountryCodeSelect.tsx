import { Select } from "@chakra-ui/react";
import { useTranslate } from "@tolgee/react";
import React, { type ChangeEvent } from "react";

type Props = {
  countryCode?: string;
  onSelect: (countryCode: string) => void;
};

export const CountryCodeSelect = ({ countryCode, onSelect }: Props) => {
  const { t } = useTranslate();
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };
  return (
    <Select
      placeholder={t(
        "blocks.inputs.phone.settings.international.placeholder.label",
      )}
      value={countryCode}
      onChange={handleOnChange}
    >
      <option value="DZ">Algeria (+213)</option>
      <option value="AD">Andorra (+376)</option>
      <option value="AO">Angola (+244)</option>
      <option value="AI">Anguilla (+1264)</option>
      <option value="AG">Antigua &amp; Barbuda (+1268)</option>
      <option value="AR">Argentina (+54)</option>
      <option value="AM">Armenia (+374)</option>
      <option value="AW">Aruba (+297)</option>
      <option value="AU">Australia (+61)</option>
      <option value="AT">Austria (+43)</option>
      <option value="AZ">Azerbaijan (+994)</option>
      <option value="BS">Bahamas (+1242)</option>
      <option value="BH">Bahrain (+973)</option>
      <option value="BD">Bangladesh (+880)</option>
      <option value="BB">Barbados (+1246)</option>
      <option value="BY">Belarus (+375)</option>
      <option value="BE">Belgium (+32)</option>
      <option value="BZ">Belize (+501)</option>
      <option value="BJ">Benin (+229)</option>
      <option value="BM">Bermuda (+1441)</option>
      <option value="BT">Bhutan (+975)</option>
      <option value="BO">Bolivia (+591)</option>
      <option value="BA">Bosnia Herzegovina (+387)</option>
      <option value="BW">Botswana (+267)</option>
      <option value="BR">Brazil (+55)</option>
      <option value="BN">Brunei (+673)</option>
      <option value="BG">Bulgaria (+359)</option>
      <option value="BF">Burkina Faso (+226)</option>
      <option value="BI">Burundi (+257)</option>
      <option value="KH">Cambodia (+855)</option>
      <option value="CM">Cameroon (+237)</option>
      <option value="CA">Canada (+1)</option>
      <option value="CV">Cape Verde Islands (+238)</option>
      <option value="KY">Cayman Islands (+1345)</option>
      <option value="CF">Central African Republic (+236)</option>
      <option value="CL">Chile (+56)</option>
      <option value="CN">China (+86)</option>
      <option value="CO">Colombia (+57)</option>
      <option value="KM">Comoros (+269)</option>
      <option value="CG">Congo (+242)</option>
      <option value="CK">Cook Islands (+682)</option>
      <option value="CR">Costa Rica (+506)</option>
      <option value="CI">Cote D'Ivoire (+225)</option>
      <option value="HR">Croatia (+385)</option>
      <option value="CU">Cuba (+53)</option>
      <option value="CY">Cyprus North (+90392)</option>
      <option value="CY">Cyprus South (+357)</option>
      <option value="CZ">Czech Republic (+42)</option>
      <option value="DK">Denmark (+45)</option>
      <option value="DJ">Djibouti (+253)</option>
      <option value="DM">Dominica (+1809)</option>
      <option value="DO">Dominican Republic (+18XX)</option>
      <option value="EC">Ecuador (+593)</option>
      <option value="EG">Egypt (+20)</option>
      <option value="SV">El Salvador (+503)</option>
      <option value="GQ">Equatorial Guinea (+240)</option>
      <option value="ER">Eritrea (+291)</option>
      <option value="EE">Estonia (+372)</option>
      <option value="ET">Ethiopia (+251)</option>
      <option value="FK">Falkland Islands (+500)</option>
      <option value="FO">Faroe Islands (+298)</option>
      <option value="FJ">Fiji (+679)</option>
      <option value="FI">Finland (+358)</option>
      <option value="FR">France (+33)</option>
      <option value="GF">French Guiana (+594)</option>
      <option value="PF">French Polynesia (+689)</option>
      <option value="GA">Gabon (+241)</option>
      <option value="GM">Gambia (+220)</option>
      <option value="GE">Georgia (+7880)</option>
      <option value="DE">Germany (+49)</option>
      <option value="GH">Ghana (+233)</option>
      <option value="GI">Gibraltar (+350)</option>
      <option value="GR">Greece (+30)</option>
      <option value="GL">Greenland (+299)</option>
      <option value="GD">Grenada (+1473)</option>
      <option value="GP">Guadeloupe (+590)</option>
      <option value="GU">Guam (+671)</option>
      <option value="GT">Guatemala (+502)</option>
      <option value="GN">Guinea (+224)</option>
      <option value="GW">Guinea - Bissau (+245)</option>
      <option value="GY">Guyana (+592)</option>
      <option value="HT">Haiti (+509)</option>
      <option value="HN">Honduras (+504)</option>
      <option value="HK">Hong Kong (+852)</option>
      <option value="HU">Hungary (+36)</option>
      <option value="IS">Iceland (+354)</option>
      <option value="IN">India (+91)</option>
      <option value="ID">Indonesia (+62)</option>
      <option value="IR">Iran (+98)</option>
      <option value="IQ">Iraq (+964)</option>
      <option value="IE">Ireland (+353)</option>
      <option value="IL">Israel (+972)</option>
      <option value="IT">Italy (+39)</option>
      <option value="JM">Jamaica (+1876)</option>
      <option value="JP">Japan (+81)</option>
      <option value="JO">Jordan (+962)</option>
      <option value="KZ">Kazakhstan (+7)</option>
      <option value="KE">Kenya (+254)</option>
      <option value="KI">Kiribati (+686)</option>
      <option value="KP">Korea North (+850)</option>
      <option value="KR">Korea South (+82)</option>
      <option value="KW">Kuwait (+965)</option>
      <option value="KG">Kyrgyzstan (+996)</option>
      <option value="LA">Laos (+856)</option>
      <option value="LV">Latvia (+371)</option>
      <option value="LB">Lebanon (+961)</option>
      <option value="LS">Lesotho (+266)</option>
      <option value="LR">Liberia (+231)</option>
      <option value="LY">Libya (+218)</option>
      <option value="LI">Liechtenstein (+417)</option>
      <option value="LT">Lithuania (+370)</option>
      <option value="LU">Luxembourg (+352)</option>
      <option value="MO">Macao (+853)</option>
      <option value="MK">Macedonia (+389)</option>
      <option value="MG">Madagascar (+261)</option>
      <option value="MW">Malawi (+265)</option>
      <option value="MY">Malaysia (+60)</option>
      <option value="MV">Maldives (+960)</option>
      <option value="ML">Mali (+223)</option>
      <option value="MT">Malta (+356)</option>
      <option value="MH">Marshall Islands (+692)</option>
      <option value="MQ">Martinique (+596)</option>
      <option value="MR">Mauritania (+222)</option>
      <option value="YT">Mayotte (+269)</option>
      <option value="MX">Mexico (+52)</option>
      <option value="FM">Micronesia (+691)</option>
      <option value="MD">Moldova (+373)</option>
      <option value="MC">Monaco (+377)</option>
      <option value="MN">Mongolia (+976)</option>
      <option value="MS">Montserrat (+1664)</option>
      <option value="MA">Morocco (+212)</option>
      <option value="MZ">Mozambique (+258)</option>
      <option value="MN">Myanmar (+95)</option>
      <option value="NA">Namibia (+264)</option>
      <option value="NR">Nauru (+674)</option>
      <option value="NP">Nepal (+977)</option>
      <option value="NL">Netherlands (+31)</option>
      <option value="NC">New Caledonia (+687)</option>
      <option value="NZ">New Zealand (+64)</option>
      <option value="NI">Nicaragua (+505)</option>
      <option value="NE">Niger (+227)</option>
      <option value="NG">Nigeria (+234)</option>
      <option value="NU">Niue (+683)</option>
      <option value="NF">Norfolk Islands (+672)</option>
      <option value="NP">Northern Marianas (+670)</option>
      <option value="NO">Norway (+47)</option>
      <option value="OM">Oman (+968)</option>
      <option value="PW">Palau (+680)</option>
      <option value="PA">Panama (+507)</option>
      <option value="PG">Papua New Guinea (+675)</option>
      <option value="PY">Paraguay (+595)</option>
      <option value="PE">Peru (+51)</option>
      <option value="PH">Philippines (+63)</option>
      <option value="PL">Poland (+48)</option>
      <option value="PT">Portugal (+351)</option>
      <option value="PR">Puerto Rico (+1787)</option>
      <option value="QA">Qatar (+974)</option>
      <option value="RE">Reunion (+262)</option>
      <option value="RO">Romania (+40)</option>
      <option value="RU">Russia (+7)</option>
      <option value="RW">Rwanda (+250)</option>
      <option value="SM">San Marino (+378)</option>
      <option value="ST">Sao Tome &amp; Principe (+239)</option>
      <option value="SA">Saudi Arabia (+966)</option>
      <option value="SN">Senegal (+221)</option>
      <option value="CS">Serbia (+381)</option>
      <option value="SC">Seychelles (+248)</option>
      <option value="SL">Sierra Leone (+232)</option>
      <option value="SG">Singapore (+65)</option>
      <option value="SK">Slovak Republic (+421)</option>
      <option value="SI">Slovenia (+386)</option>
      <option value="SB">Solomon Islands (+677)</option>
      <option value="SO">Somalia (+252)</option>
      <option value="ZA">South Africa (+27)</option>
      <option value="ES">Spain (+34)</option>
      <option value="LK">Sri Lanka (+94)</option>
      <option value="SH">St. Helena (+290)</option>
      <option value="KN">St. Kitts (+1869)</option>
      <option value="SC">St. Lucia (+1758)</option>
      <option value="SD">Sudan (+249)</option>
      <option value="SR">Suriname (+597)</option>
      <option value="SZ">Swaziland (+268)</option>
      <option value="SE">Sweden (+46)</option>
      <option value="CH">Switzerland (+41)</option>
      <option value="SI">Syria (+963)</option>
      <option value="TW">Taiwan (+886)</option>
      <option value="TJ">Tajikstan (+7)</option>
      <option value="TH">Thailand (+66)</option>
      <option value="TZ">Tanzania - United Rebublic (+255)</option>
      <option value="TG">Togo (+228)</option>
      <option value="TO">Tonga (+676)</option>
      <option value="TT">Trinidad &amp; Tobago (+1868)</option>
      <option value="TN">Tunisia (+216)</option>
      <option value="TR">Turkey (+90)</option>
      <option value="TM">Turkmenistan (+7)</option>
      <option value="TM">Turkmenistan (+993)</option>
      <option value="TC">Turks &amp; Caicos Islands (+1649)</option>
      <option value="TV">Tuvalu (+688)</option>
      <option value="UG">Uganda (+256)</option>
      <option value="GB">UK (+44)</option>
      <option value="UA">Ukraine (+380)</option>
      <option value="AE">United Arab Emirates (+971)</option>
      <option value="UY">Uruguay (+598)</option>
      <option value="US">USA (+1)</option>
      <option value="UZ">Uzbekistan (+7)</option>
      <option value="VU">Vanuatu (+678)</option>
      <option value="VA">Vatican City (+379)</option>
      <option value="VE">Venezuela (+58)</option>
      <option value="VN">Vietnam (+84)</option>
      <option value="VG">Virgin Islands - British (+1284)</option>
      <option value="VI">Virgin Islands - US (+1340)</option>
      <option value="WF">Wallis &amp; Futuna (+681)</option>
      <option value="YE">Yemen (North)(+969)</option>
      <option value="YE">Yemen (South)(+967)</option>
      <option value="ZM">Zambia (+260)</option>
      <option value="ZW">Zimbabwe (+263)</option>
    </Select>
  );
};
