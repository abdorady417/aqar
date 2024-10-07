import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://rowadtech.com";
export const getPartner = createAsyncThunk(
  "home/getPartner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/admin/partner`, {
        params: {
          offset: 0,
          limit: 10,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getsetting = createAsyncThunk(
  "home/getsetting",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/admin/setting`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getproject = createAsyncThunk(
  "home/getproject",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/admin/project`, {
        params: {
          offset: 0,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getService = createAsyncThunk(
  "home/getService",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/admin/service`, {
        params: {
          offset: 0,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const getBlogs = createAsyncThunk(
  "home/getBlogs",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/admin/blogs`, {
        params: {
          offset: 0,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const testimonial = createAsyncThunk(
  "home/testimonial",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/admin/testimonial`, {
        params: {
          offset: 0,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getblog = createAsyncThunk(
  "home/getblog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}/api/admin/blogs`, {
        params: {
          id,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const contactUs = createAsyncThunk(
  "home/contactUs",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/admin/contact_us`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getJop = createAsyncThunk(
  "home/getJop",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/api/admin/cv`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    getPartnerArr: null,
    isPartnerLoading: false,
    errorPartner: null,
    getprojectArr: null,
    projectLoading: false,
    projectError: null,
    getServiceArr: null,
    serviceLoading: false,
    serviceError: null,
    getBlogsArr: null,
    getBlogseLoading: false,
    getBlogsError: null,
    testimonialArr: null,
    testimonialLoading: false,
    testimonialError: null,
    getblogArr: null,
    getblogLoading: false,
    getblogError: null,
    contactLoading: false,
    contactError: null,
    contactSuccess: null,
    getJopLoading: false,
    getJopError: null,
    getJopSuccess: null,
    getsettingArr: null,
    getsettingLoading: false,
    getsettingError: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPartner.pending, (state) => {
        state.isPartnerLoading = true;
      })
      .addCase(getPartner.fulfilled, (state, action) => {
        state.getPartnerArr = action.payload.data;
        state.isPartnerLoading = false;
      })
      .addCase(getPartner.rejected, (state, action) => {
        state.isPartnerLoading = false;
        state.errorPartner = action.payload;
      })
      // Handle getsetting actions
      .addCase(getsetting.pending, (state) => {
        state.getsettingLoading = true;
      })
      .addCase(getsetting.fulfilled, (state, action) => {
        state.getsettingArr = action.payload.data;
        state.getsettingLoading = false;
      })
      .addCase(getsetting.rejected, (state, action) => {
        state.getsettingLoading = false;
        state.getsettingError = action.payload;
      })
      // Handle getJop actions
      .addCase(getJop.pending, (state) => {
        state.getJopLoading = true;
        state.getJopError = null;
        state.getJopSuccess = null;
      })
      .addCase(getJop.fulfilled, (state, action) => {
        state.getJopLoading = false;
        state.getJopSuccess = action.payload;
      })
      .addCase(getJop.rejected, (state, action) => {
        state.getJopLoading = false;
        state.getJopError = action.payload;
      })
      // Handle contactUs actions
      .addCase(contactUs.pending, (state) => {
        state.contactLoading = true;
        state.contactError = null;
        state.contactSuccess = null;
      })
      .addCase(contactUs.fulfilled, (state, action) => {
        state.contactLoading = false;
        state.contactSuccess = action.payload;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.contactLoading = false;
        state.contactError = action.payload;
      })
      // Handle getblogArr actions
      .addCase(getblog.pending, (state) => {
        state.getblogLoading = true;
      })
      .addCase(getblog.fulfilled, (state, action) => {
        state.getblogArr = action.payload.data;
        state.getblogLoading = false;
      })
      .addCase(getblog.rejected, (state, action) => {
        state.getblogLoading = false;
        state.getblogError = action.payload;
      })
      // Handle testimonialArr actions
      .addCase(testimonial.pending, (state) => {
        state.testimonialLoading = true;
      })
      .addCase(testimonial.fulfilled, (state, action) => {
        state.testimonialArr = action.payload.data;
        state.testimonialLoading = false;
      })
      .addCase(testimonial.rejected, (state, action) => {
        state.testimonialLoading = false;
        state.testimonialError = action.payload;
      })
      // Handle getproject actions
      .addCase(getproject.pending, (state) => {
        state.projectLoading = true;
      })
      .addCase(getproject.fulfilled, (state, action) => {
        state.getprojectArr = action.payload.data;
        state.projectLoading = false;
      })
      .addCase(getproject.rejected, (state, action) => {
        state.projectLoading = false;
        state.projectError = action.payload;
      })
      // Handle getService actions
      .addCase(getService.pending, (state) => {
        state.serviceLoading = true;
      })
      .addCase(getService.fulfilled, (state, action) => {
        state.getServiceArr = action.payload.data;
        state.serviceLoading = false;
      })
      .addCase(getService.rejected, (state, action) => {
        state.serviceLoading = false;
        state.serviceError = action.payload;
      })
      // Handle getBlogs actions
      .addCase(getBlogs.pending, (state) => {
        state.getBlogseLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.getBlogsArr = action.payload.data;
        state.getBlogseLoading = false;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.getBlogseLoading = false;
        state.getBlogsError = action.payload;
      });
  },
});

export default HomeSlice.reducer;
