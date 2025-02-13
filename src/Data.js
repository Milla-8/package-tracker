const Data = [
    {
      id: 1,
      status: "order-info-received",
      eta: "2020-09-07T14:23:52Z",
      parcel_id: "2919",
      sender: "Pixope",
      verification_required: false,
      location_id: "TN72 6218 5211 0387 4312 4255",
      location_name: "Stuart",
      location_coordinate_latitude: 45.6467048,
      location_coordinate_longitude: 122.8448203,
      location_status_ok: false,
      user_phone: "p46 729478015",
      user_name: "Jhon Doe",
      notes: null,
      last_updated: "2020-09-19T18:01:20Z",
    },
    {
      id: 2,
      status: "order-info-received",
      eta: "2020-09-14T18:06:49Z",
      parcel_id: "1049",
      sender: "Skiba",
      verification_required: true,
      location_id: "SK37 3554 8983 1531 9435 4511",
      location_name: "Badeau",
      location_coordinate_latitude: 39.7213971,
      location_coordinate_longitude: -7.9808794,
      location_status_ok: false,
      user_phone: "u46 729478015",
      user_name: "Jhon Doe",
      notes: null,
      last_updated: "2020-09-05T03:41:47Z",
    },
    {
      id: 3,
      status: "on-the-way",
      eta: "2020-09-22T15:58:54Z",
      parcel_id: "4533",
      sender: "Divape",
      verification_required: true,
      location_id: "NL07 BQKE 6480 0477 68",
      location_name: "Hayes",
      location_coordinate_latitude: 37.9346907,
      location_coordinate_longitude: 21.1449975,
      location_status_ok: false,
      user_phone: "u46 729478015",
      user_name: "Jhon Doe",
      notes: null,
      last_updated: "2020-09-20T21:14:58Z",
    },
    {
      id: 4,
      status: "ready-for-pickup",
      eta: "2020-09-11T03:24:01Z",
      parcel_id: "9131",
      sender: "Snaptags",
      verification_required: true,
      location_id: "FR74 8897 1295 17TB 96C4 GIIQ M03",
      location_name: "Orin",
      location_coordinate_latitude: 14.7596318,
      location_coordinate_longitude: 121.0589081,
      location_status_ok: true,
      user_phone: ":46 729478015",
      user_name: "Jhon Doe",
      notes: "Change Cast on Right Inguinal Region",
      last_updated: "2020-09-18T18:48:35Z",
    },
    {
      id: 5,
      status: "delivered",
      eta: "2020-09-25T03:46:28Z",
      parcel_id: "8698",
      sender: "Tagfeed",
      verification_required: false,
      location_id: "GE91 IB40 5748 7425 0962 24",
      location_name: "Donald",
      location_coordinate_latitude: 39.7546452,
      location_coordinate_longitude: -8.5234076,
      location_status_ok: true,
      user_phone: "u46 729478015",
      user_name: "Jhon Doe",
      notes: "Reposition Left Toe Phalangeal Joint, Percutaneous Approach",
      last_updated: "2020-09-10T07:26:08Z",
    },
    {
      id: 6,
      status: "delivered",
      eta: "2020-09-26T15:08:54Z",
      parcel_id: "4494",
      sender: "Eabox",
      verification_required: true,
      location_id: "MT14 IUEW 5320 6QGZ 2V9Y RNMY UW7L APO",
      location_name: "Ryan",
      location_coordinate_latitude: 13.0748879,
      location_coordinate_longitude: 120.7213113,
      location_status_ok: false,
      user_phone: "l46 729478015",
      user_name: "Jhon Doe",
      notes: null,
      last_updated: "2020-09-03T19:49:55Z",
    },
    {
      id: 7,
      status: "on-the-way",
      eta: "2020-09-19T09:53:53Z",
      parcel_id: "0763",
      sender: "Realpoint",
      verification_required: false,
      location_id: "MD53 OIUG 1YLK NAOI ZUQS KK05",
      location_name: "Hazelcrest",
      location_coordinate_latitude: 28.578756,
      location_coordinate_longitude: 89.227769,
      location_status_ok: true,
      user_phone: "u46 729478015",
      user_name: "Jhon Doe",
      notes: null,
      last_updated: "2020-09-01T10:18:15Z",
    },
    {
      id: 8,
      status: "delivered",
      eta: "2020-09-02T18:05:53Z",
      parcel_id: "0798",
      sender: "Gigaclub",
      verification_required: true,
      location_id: "MK58 222B Z4TW 5HZV 064",
      location_name: "Menomonie",
      location_coordinate_latitude: 46.761348,
      location_coordinate_longitude: 124.23692,
      location_status_ok: true,
      user_phone: "p46 729478015",
      user_name: "Jhon Doe",
      notes: "Exercise Treatment of Circ Body using Aerobic Equipment",
      last_updated: "2020-09-04T08:04:06Z",
    },
    {
      id: 9,
      status: "on-the-way",
      eta: "2020-09-19T11:00:40Z",
      parcel_id: "2772",
      sender: "Shuffledrive",
      verification_required: true,
      location_id: "NO51 9761 1390 413",
      location_name: "Atwood",
      location_coordinate_latitude: -6.6355378,
      location_coordinate_longitude: 106.8490872,
      location_status_ok: true,
      user_phone: ":46 729478015",
      user_name: "Jhon Doe",
      notes: null,
      last_updated: "2020-09-23T17:19:26Z",
    },
    {
      id: 10,
      status: "ready-for-pickup",
      eta: "2020-09-12T15:27:50Z",
      parcel_id: "2100",
      sender: "Oozz",
      verification_required: false,
      location_id: "FR11 8495 7167 14ML NKVX I5YU Q54",
      location_name: "Londonderry",
      location_coordinate_latitude: 35.9329039,
      location_coordinate_longitude: 10.0219822,
      location_status_ok: true,
      user_phone: ":46 729478015",
      user_name: "Jhon Doe",
      notes: null,
      last_updated: "2020-09-07T08:32:16Z",
    },
  ];

export default Data;